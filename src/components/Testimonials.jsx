import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, X, ExternalLink } from 'lucide-react';
import './Testimonials.css';

export const youtubeVideosData = [
  {
    id: 'yt-1',
    title: 'IVF Rules and Regulations',
    patient: 'Neovita - The Fertility Expert',
    category: 'IVF GUIDANCE & RULES',
    duration: 'Expert Guide',
    youtubeId: 'xppOpDPGxxM',
    thumbnail: 'https://i.ytimg.com/vi/xppOpDPGxxM/maxresdefault.jpg',
    quote: 'Essential rules, guidelines, and expert medical advice on fertility treatments from Neovita.'
  },
  {
    id: 'yt-2',
    title: 'Rights in IVF Treatment',
    patient: 'Neovita - The Fertility Expert',
    category: 'PATIENT RIGHTS & IVF',
    duration: 'Expert Guide',
    youtubeId: 'lx3TBcH49Ds',
    thumbnail: 'https://i.ytimg.com/vi/lx3TBcH49Ds/maxresdefault.jpg',
    quote: 'Understanding your legal rights, medical choices, and critical aspects of IVF treatment at Neovita.'
  },
  {
    id: 'yt-3',
    title: 'Inside Neovita IVF Lab: Precision & Care Standards',
    patient: 'Neovita - The Fertility Expert',
    category: 'EXPERT LAB TOUR',
    duration: 'Lab Tour',
    youtubeId: 'bBNKVWuq2x4',
    thumbnail: 'https://i.ytimg.com/vi/bBNKVWuq2x4/maxresdefault.jpg',
    quote: 'A detailed look inside our cleanroom embryology suite, advanced incubators, and IVF lab processes.'
  },
  {
    id: 'yt-4',
    title: 'Struggling to Conceive? Understanding IVF Options',
    patient: 'Neovita - The Fertility Expert',
    category: 'IVF & PREGNANCY GUIDE',
    duration: 'Expert Guide',
    youtubeId: 'ngR-ef9evWc',
    thumbnail: 'https://i.ytimg.com/vi/ngR-ef9evWc/maxresdefault.jpg',
    quote: 'Guidance and clarity on when to consider IVF, overcoming conception challenges, and healthy pregnancy steps.'
  }
];

export const testimonialsData = [
  {
    name: "Greeshma GR",
    role: "Patient",
    initial: "G",
    avatarClass: "avatar-g",
    text: "I had a wonderful experience at Neovity. It was my first visit, and Dr. Anju made me feel completely at ease. She listened patiently, understood my concerns, and provided a solution for a long-term problem that I had been struggling with. The doctor explained everything clearly and guided me through the treatment with great care. The staff were friendly. I'm truly grateful for the care I received."
  },
  {
    name: "Athira Monoharan",
    role: "Patient",
    initial: "A",
    avatarClass: "avatar-a",
    text: "I recently visited Neovita Fertility Centre and had a wonderfully positive experience. Dr. Anju Madhavan was incredibly friendly and supportive, taking the time to listen and explain everything clearly. The caring staff made me feel at ease, being helpful and attentive throughout my visit. The hospital was neat and clean, which added to the overall comfort. Its convenient location near Guru Mandiram, Ayathil Junction, makes it easily accessible. Overall, it was a great experience, and I would definitely recommend it.👍"
  },
  {
    name: "Jessica Atienza",
    role: "International Patient",
    initial: "J",
    avatarClass: "avatar-ja",
    text: "I'm from the Philippines and I had a wonderful experience at Neovita Fertility Center. The doctors are very good, professional, and genuinely nice — they really take time to listen and explain everything clearly. All the staff are friendly and accommodating, making every visit feel comfortable and stress-free. There's a positive energy inside the clinic that gives you hope and encouragement throughout your journey. Highly recommended for anyone seeking fertility treatment with a warm and caring team. Thank you, Neovita!"
  },
  {
    name: "Vinoth Kumar",
    role: "Happy Parent",
    initial: "V",
    avatarClass: "avatar-v",
    text: "We wholeheartedly recommend Neovita fertility center to anyone facing infertility challenges. Our journey here was smooth and stress-free. The entire team, especially Dr. Anju mam, and Tobin Thomas sir was efficient, focused, and incredibly kind. We were treated like their only clients, and every visit reinforced that we had made the right choice. We are so grateful for the services and care provided here and wouldn't hesitate to recommend them to family and friends. Thank you for making our dream come true!"
  },
  {
    name: "Jimmy Akkattucst",
    role: "Happy Parent",
    initial: "J",
    avatarClass: "avatar-j",
    text: "The best Fertility centre in Kerala. The staff is very considerate. All the procedures are well cleared beyond any doubt. The emotional support, timely guidance, availability, friendly nature above all an affordable prize attract everyone to Neovita.. Feel proud of you.. Our long cherished dream has been successfully fulfilled 🙏 God bless you all 🙏🙏🙏"
  },
  {
    name: "Kanchi Kanchi",
    role: "Patient",
    initial: "K",
    avatarClass: "avatar-k",
    text: "We had an excellent experience at Neovita Hospital. All the staffs were professional, kind, and attentive. The doctor took the time to explain everything clearly. I'm grateful for the quality of care. I would highly recommend this hospital to anyone."
  }
];

export const TestimonialsColumn = (props) => {
  const testimonials = props.testimonials || testimonialsData;
  
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background testimonials-motion-track"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role, initial, avatarClass }, i) => (
                <div 
                  className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full testimonial-card" 
                  key={i}
                >
                  <div className="quote-mark">“</div>
                  <div className="testimonial-text-content">{text}</div>
                  <div className="flex items-center gap-2 mt-5 testimonial-author-footer">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className={`author-avatar ${avatarClass || 'avatar-v'}`}>
                        {initial || (name ? name.charAt(0) : 'N')}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 author-name">{name}</div>
                      {role && <div className="leading-5 opacity-60 tracking-tight author-role">{role}</div>}
                    </div>
                  </div>
                  <div className="card-leaf-decoration"></div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const firstColumn = testimonialsData.slice(0, 2);
  const secondColumn = testimonialsData.slice(2, 4);
  const thirdColumn = testimonialsData.slice(4, 6);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Top Scrolling Testimonials Header */}
        <div className="testimonials-header">
          <div className="testimonials-subtitle-wrapper">
            <span className="testimonials-line"></span>
            <span className="testimonials-subtitle">REAL STORIES &bull; REAL HOPE</span>
            <span className="testimonials-line"></span>
          </div>
          <h2 className="testimonials-title">
            Our Happy <span className="highlight">Clients</span>
          </h2>
          <p className="testimonials-description">
            At Neovita IVF Centre, every journey is personal. Here's what our valued<br/>
            patients have to say about their experience with us.
          </p>
        </div>

        {/* Scrolling Cards Viewport */}
        <div className="testimonials-viewport">
          <div className="testimonials-columns-wrapper">
            <TestimonialsColumn testimonials={firstColumn} duration={18} className="testimonials-col" />
            <TestimonialsColumn testimonials={secondColumn} duration={24} className="testimonials-col hide-mobile" />
            <TestimonialsColumn testimonials={thirdColumn} duration={20} className="testimonials-col hide-tablet" />
          </div>
        </div>

        {/* =========================================================================
            Extended Space: 4 YouTube Video Testimonials Section (Same Background)
            ========================================================================= */}
        <div className="youtube-videos-section">
          
          {/* Section Divider & Header */}
          <div className="youtube-videos-header">
            <div className="testimonials-subtitle-wrapper">
              <span className="testimonials-line"></span>
              <span className="testimonials-subtitle">VIDEOS</span>
              <span className="testimonials-line"></span>
            </div>
            <h3 className="youtube-videos-title">
              Featured <span className="highlight">Videos</span>
            </h3>
          </div>

          {/* 4 YouTube Video Cards Grid */}
          <div className="youtube-videos-grid">
            {youtubeVideosData.map((video) => {
              const isPlaying = activeVideoId === video.id;

              return (
                <div 
                  key={video.id} 
                  className={`youtube-video-card ${isPlaying ? 'is-playing' : ''}`}
                  onClick={() => {
                    if (!isPlaying) setActiveVideoId(video.id);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !isPlaying) {
                      e.preventDefault();
                      setActiveVideoId(video.id);
                    }
                  }}
                  style={{ cursor: isPlaying ? 'default' : 'pointer' }}
                  aria-label={`Video: ${video.title}`}
                >
                  
                  {/* 16:9 Video Player / Thumbnail Facade */}
                  <div className="video-media-wrapper">
                    {isPlaying ? (
                      <div className="video-iframe-holder">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=1&enablejsapi=1`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="youtube-embedded-iframe"
                        />
                        <button 
                          className="btn-close-video" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVideoId(null);
                          }}
                          title="Close Video"
                          aria-label="Close Video"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div 
                        className="video-thumbnail-trigger"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveVideoId(video.id);
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Play ${video.title}`}
                      >
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="video-thumb-img" 
                          loading="lazy" 
                          onError={(e) => {
                            if (video.youtubeId && !e.target.src.includes('hqdefault')) {
                              e.target.src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
                            }
                          }}
                        />
                        <div className="video-thumb-overlay"></div>
                        
                        {/* Category Tag */}
                        <span className="video-category-tag">{video.category}</span>
                        
                        {/* Duration Pill */}
                        <span className="video-duration-pill">{video.duration}</span>

                        {/* YouTube Signature Play Button */}
                        <div className="youtube-play-btn-pulse">
                          <div className="youtube-play-btn-circle">
                            <Play size={20} fill="#ffffff" className="play-triangle-icon" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content & Details */}
                  <div className="video-card-body">
                    <span className="video-patient-name">{video.patient}</span>
                    <h4 className="video-card-title">{video.title}</h4>
                    <p className="video-card-quote">"{video.quote}"</p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Official YouTube Channel Link Banner */}
          <div className="youtube-channel-footer">
            <a 
              href="https://www.youtube.com/@neovitakollam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-channel-link"
            >
              <div className="yt-badge-icon">
                <Play size={14} fill="#ffffff" />
              </div>
              <span>Explore more stories on our official YouTube channel <strong>@neovitakollam</strong></span>
              <ExternalLink size={14} className="yt-external-icon" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
