import React, { useRef, useEffect } from 'react';
import { Microscope, User, HeartPulse, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ onFramesLoaded }) => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null); 
  const overlayRef = useRef(null);
  
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef(null);
  const frameCount = 120; 
  const images = useRef([]);
  const lastDrawnState = useRef({ index: -1, width: 0, height: 0 });
  const viewportSize = useRef({ width: 0, height: 0 });

  useEffect(() => {
    // Initial size
    viewportSize.current = { width: window.innerWidth, height: window.innerHeight };

    // Resize listener
    const handleResize = () => {
      viewportSize.current = { width: window.innerWidth, height: window.innerHeight };
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Preload images
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      
      img.onload = () => {
        loadedCount++;
        // Tell the parent (Loader) that frames are ready once they're all loaded
        if (loadedCount === frameCount) {
          if (onFramesLoaded) onFramesLoaded();
        }
      };
      
      img.src = `/hero-frames/frame_${frameNum}.webp`;
      images.current.push(img);
    }
    
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    
    const drawCover = (ctx, img, w, h) => {
      const imgRatio = img.width / img.height;
      const canvasRatio = w / h;
      let drawW, drawH, drawX, drawY;

      if (imgRatio > canvasRatio) {
        drawH = h;
        drawW = img.width * (h / img.height);
        drawX = (w - drawW) / 2;
        drawY = 0;
      } else {
        drawW = w;
        drawH = img.height * (w / img.width);
        drawX = 0;
        drawY = (h - drawH) / 2;
      }
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    };

    if (images.current[0]) {
      images.current[0].onload = () => {
        if (context && canvas) {
          canvas.width = viewportSize.current.width;
          canvas.height = viewportSize.current.height;
          drawCover(context, images.current[0], canvas.width, canvas.height);
          lastDrawnState.current = { index: 0, width: canvas.width, height: canvas.height };
        }
      };
    }

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animateCanvas = () => {
      if (Math.abs(targetProgress.current - currentProgress.current) > 0.001) {
        currentProgress.current = lerp(currentProgress.current, targetProgress.current, 0.08);
      } else {
        currentProgress.current = targetProgress.current;
      }
      
      // Control text visibility (Fade in from progress 0.7 to 1.0)
      if (contentRef.current) {
        // progress mapping: 0.7 -> 0, 1.0 -> 1
        let textOpacity = Math.max(0, (currentProgress.current - 0.7) / 0.3);
        // Ensure it doesn't exceed 1
        textOpacity = Math.min(1, textOpacity);
        
        let textTranslate = 30 * (1 - textOpacity); // Slide up by 30px
        
        contentRef.current.style.opacity = textOpacity;
        contentRef.current.style.transform = `translateY(${textTranslate}px)`;
        // Disable pointer events if not fully visible to prevent accidental clicks
        contentRef.current.style.pointerEvents = textOpacity > 0.9 ? 'auto' : 'none';
        
        // Also fade the white overlay in with the text
        if (overlayRef.current) {
          overlayRef.current.style.opacity = textOpacity;
        }
      }

      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(currentProgress.current * frameCount))
      );
      
      if (context && canvas && images.current[frameIndex] && images.current[frameIndex].complete) {
        let needsDraw = false;
        
        const vw = viewportSize.current.width;
        const vh = viewportSize.current.height;

        if (canvas.width !== vw || canvas.height !== vh) {
          canvas.width = vw;
          canvas.height = vh;
          needsDraw = true;
        }

        if (lastDrawnState.current.index !== frameIndex) {
          needsDraw = true;
        }

        if (needsDraw) {
          drawCover(context, images.current[frameIndex], vw, vh);
          lastDrawnState.current = { index: frameIndex, width: vw, height: vh };
        }
      }
      
      rafId.current = requestAnimationFrame(animateCanvas);
    };

    rafId.current = requestAnimationFrame(animateCanvas);

    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const heroTop = rect.top;
      const heroHeight = rect.height - viewportSize.current.height; 
      
      let progress = 0;
      if (heroTop <= 0) {
        let rawProgress = Math.abs(heroTop) / heroHeight;
        // Finish the animation when the user has scrolled 80% of the container.
        // The last 20% of the container scroll will just hold the final frame and text on screen
        // before the next section starts coming up.
        progress = Math.min(1, rawProgress / 0.8);
      }
      
      targetProgress.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial text opacity to 0
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-sticky-wrapper">
        
        {/* Full Screen Background Canvas */}
        <canvas 
          ref={canvasRef}
          className="hero-fullscreen-video" 
        />

        {/* Optional overlay to make text readable */}
        <div className="hero-video-overlay" ref={overlayRef}></div>

        <div className="container hero-container">
          <div className="hero-content" ref={contentRef} style={{ opacity: 0, transition: 'opacity 0.1s linear, transform 0.1s linear' }}>
            <h1 className="hero-headline">
              Your Journey to <br/>
              <span className="highlight-purple">Parenthood</span> <br/>
              Starts Here.
            </h1>
            <p className="hero-description">
              Compassionate, advanced fertility care, personalised treatment, and world-class reproductive medicine — thoughtfully designed for your unique journey.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                Book Consultation <ArrowRight className="btn-icon-svg" size={18} />
              </button>
              <button className="btn btn-secondary">
                Explore Fertility Care <ArrowRight className="btn-icon-svg" size={18} />
              </button>
            </div>
            
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-icon-wrapper"><Microscope size={20} /></div>
                <span>Advanced<br/>Technology</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon-wrapper"><User size={20} /></div>
                <span>Personalised<br/>Treatment</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon-wrapper"><HeartPulse size={20} /></div>
                <span>Higher<br/>Success Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
