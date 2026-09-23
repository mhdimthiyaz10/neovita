import ffmpegPath from 'ffmpeg-static';
import { execFile } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The new video file path provided by the user
const videoPath = 'c:\\Users\\Mohammed Imthiyaz\\Documents\\Neovita web\\TensorPix - IVF_animation_of_conception_process_20260923215742-ezremove.mp4';
const outDir = path.join(__dirname, 'public', 'hero-frames');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Clear old frames (both jpg and webp just in case)
fs.readdirSync(outDir).forEach(f => {
  if (f.endsWith('.jpg') || f.endsWith('.webp')) {
    fs.unlinkSync(path.join(outDir, f));
  }
});

// 1. Get duration
execFile(ffmpegPath, ['-i', videoPath], (error, stdout, stderr) => {
  // ffmpeg outputs info to stderr
  const match = stderr.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
  if (!match) {
    console.error('Could not determine video duration. Stderr dump:', stderr);
    return;
  }
  
  const hours = parseFloat(match[1]);
  const minutes = parseFloat(match[2]);
  const seconds = parseFloat(match[3]);
  const durationInSeconds = (hours * 3600) + (minutes * 60) + seconds;
  
  console.log(`Video duration: ${durationInSeconds} seconds`);
  
  // 2. We want exactly 120 frames over this duration
  const fps = 120 / durationInSeconds;
  console.log(`Calculated FPS to get 120 frames: ${fps}`);

  const args = [
    '-i', videoPath,
    '-vf', `fps=${fps},scale=1280:-1`,
    '-vframes', '120',
    '-c:v', 'libwebp',
    '-quality', '90',
    '-y',
    path.join(outDir, 'frame_%03d.webp')
  ];

  console.log('Extracting frames as WEBP across the full video...');
  execFile(ffmpegPath, args, (extractError, extractStdout, extractStderr) => {
    if (extractError) {
      console.error('Error extracting frames:', extractError);
      console.error(extractStderr);
      return;
    }
    console.log('Frames extracted successfully as WEBP.');
  });
});
