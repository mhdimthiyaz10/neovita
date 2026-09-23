const ffmpegPath = require('ffmpeg-static');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const videoPath = path.join(__dirname, 'public', 'ivf-animation.mp4');
const outDir = path.join(__dirname, 'public', 'hero-frames');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Extract 120 frames using a generic fps calculation, or just extract first 120 frames if video is long.
// If the video is exactly the animation, extracting 120 frames across its duration:
// Let's just try to extract at 24 fps first. If there are too many, we can just take the first 120.
const args = [
  '-i', videoPath,
  '-vf', 'fps=24', // Or maybe we just extract all frames? Let's just extract all frames and see how many we get.
  // Actually, if we just want exactly 120 frames, we can use select.
  // But wait, what is the duration? We can just do a normal extract and handle the files later.
  '-frames:v', '120', // This forces exactly 120 frames max. If video has fewer frames, it extracts all. If more, it stops at 120.
  // Wait, if it stops at 120 but the video is 10 seconds long at 30fps (300 frames), the sequence will end abruptly.
  // Let's use scale to resize them too, maybe 1280px wide to save memory.
  '-vf', 'scale=1280:-1',
  path.join(outDir, 'frame_%03d.jpg')
];

console.log('Running ffmpeg to extract frames...');
execFile(ffmpegPath, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Error extracting frames:', error);
    return;
  }
  console.log('Frames extracted successfully.');
});
