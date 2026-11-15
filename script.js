const projects = {
  redemption: { title: 'Redemption', category: 'Passion Projects / 01', type: 'Fashion film', format: 'Short film / editorial', description: 'A study in transformation, shadow and the quiet voltage of a new beginning.', credits: 'RNM Productions / Direction / Production', bts: ['images/redemption-bts-01.jpg', 'images/redemption-bts-02.jpg', 'images/redemption-bts-03.jpg', 'images/redemption-bts-04.jpg'] },
  nocturnal: { title: 'Nocturnal', category: 'Passion Projects / 02', type: 'Editorial film', format: 'Fashion film / photography', description: 'A nocturne built from electric color, late hours and a silhouette that refuses to disappear.', credits: 'RNM Productions / Creative Direction / Film', bts: ['images/nocturnal-bts-01.jpg', 'images/nocturnal-bts-02.jpg', 'images/nocturnal-bts-03.jpg', 'images/nocturnal-bts-04.jpg'] },
  blossom: { title: 'Blossom', category: 'Passion Projects / 03', type: 'Fashion story', format: 'Editorial / stills', description: 'Texture, movement and a softer kind of power captured in a sequence of evolving frames.', credits: 'RNM Productions / Photography / Production', video: 'videos/blossom.mp4', bts: ['videos/blossom-bts-01.MP4', 'videos/blossom-bts-02.mp4', 'videos/blossom-bts-03.mp4', 'videos/blossom-bts-04.mp4'] },
  'sara-khan': {
    title: 'Sara Khan', category: 'Influencer Content / 01', type: 'Personal story', format: 'Portrait film', description: 'A portrait of presence, built around the details that make a public image feel human.', credits: 'RNM Productions / Film / Photography',
    additionalVideos: [
      { title: 'Video 2 Title', src: 'videos/sara-khan-02.mp4' },
      { title: 'Video 3 Title', src: 'videos/sara-khan-03.mp4' },
      { title: 'Video 4 Title', src: 'videos/sara-khan-04.mp4' }
    ]
  },
  'gym-wale-bhaiya': {
    title: 'Gym Wale Bhaiya', category: 'Influencer Content / 02', type: 'Content series', format: 'Branded social content', description: 'Energy, rhythm and honest effort turned into a repeatable visual language for social.', credits: 'RNM Productions / Concept / Production',
    additionalVideos: [
      { title: 'Video 2 Title', src: 'videos/gym-wale-bhaiya-02.mp4' },
      { title: 'Video 3 Title', src: 'videos/gym-wale-bhaiya-03.mp4' }
    ]
  },
  'daood-khan': {
    title: 'Daood Khan', category: 'Influencer Content / 03', type: 'Portrait series', format: 'Digital campaign', description: 'A character-led portrait series that lets craft, charisma and considered light lead the way.', credits: 'RNM Productions / Direction / Photography',
    additionalVideos: [{ title: 'Video 2 Title', src: 'videos/daood-khan-02.mp4' }]
  },
  floo: { title: 'Floo', category: 'Commercial Projects / 02', type: 'Brand film', format: 'Commercial / campaign', description: 'A product world with a clear pulse: tactile, contemporary and made to stay with you.', credits: 'RNM Productions / Film / Production' },
  'socialite-seven': { title: 'Socialite Seven', category: 'Commercial Projects / 03', type: 'Campaign', format: 'Brand campaign', description: 'A campaign that turns an everyday ritual into an invitation to look closer.', credits: 'RNM Productions / Creative Direction / Film', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'vip-pipes': {
    title: 'VIP Pipes', category: 'Commercial Projects / 01', type: 'Brand film', format: 'Brand story / campaign', description: 'A brand story shaped around the design, quality and everyday utility of VIP Pipes.', credits: 'RNM Productions / Creative / Production', video: 'videos/VIP-pipes.mp4', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'],
    additionalVideos: [
      { title: 'Video 2 Title', src: 'videos/VIP-pipes-02.mp4' },
      { title: 'Video 3 Title', src: 'videos/VIP-pipes-03.mp4' },
      { title: 'Video 4 Title', src: 'videos/VIP-pipes-04.mp4' }
    ]
  },
  'navrang-saree-house': {
    title: 'Navrang Saree House', category: 'Commercial Projects / 04', type: 'Retail story', format: 'Brand film / photography', description: 'A celebration of color and continuity for a house where every fabric carries a memory.', credits: 'RNM Productions / Film / Photography',
    additionalVideos: [
      { title: 'Video 2 Title', src: 'videos/navrang-saree-house-02.mp4' },
      { title: 'Video 3 Title', src: 'videos/navrang-saree-house-03.mp4' }
    ]
  },
  'real-estate': {
    title: 'Real Estate', category: 'Commercial Projects / 05', type: 'Space / architecture', format: 'Property film', description: 'Architecture rendered as atmosphere: a measured journey through light, volume and place.', credits: 'RNM Productions / Direction / Film',
    additionalVideos: [
      { title: 'Video 2 Title', src: 'videos/real-estate-02.mp4' },
      { title: 'Video 3 Title', src: 'videos/real-estate-03.mp4' },
      { title: 'Video 4 Title', src: 'videos/real-estate-04.mp4' }
    ]
  },
  'podcast-work': {
    title: 'Podcast Work', category: 'Commercial Projects / 06', type: 'Conversation series', format: 'Multi-camera / digital', description: 'A considered visual home for ideas in conversation, with room for every voice to land.', credits: 'RNM Productions / Multi-camera / Production',
    additionalVideos: [{ title: 'Video 2 Title', src: 'videos/podcast-work-02.mp4' }]
  },
  'castrol-oil': { title: 'Castrol Oil', category: 'Commercial Work / 07', type: 'Commercial film', format: 'Brand film / campaign', description: '', credits: 'RNM Productions / Film / Production', video: 'videos/castrol-oil.mp4', additionalVideos: [{ title: 'Video 2', src: 'videos/castrol-oil-02.mp4' }] },
  'ampere-electric': { title: 'Ampere Electric', category: 'Commercial Work / 08', type: 'Commercial film', format: 'Brand film / campaign', description: '', credits: 'RNM Productions / Film / Production', video: 'videos/ampere-electric.mp4', additionalVideos: [{ title: 'Video 2', src: 'videos/ampere-electric-02.mp4' }] },
  'mile-x': { title: 'MILE X', category: 'Commercial Work / 09', type: 'Commercial film', format: 'Brand film / campaign', description: '', credits: 'RNM Productions / Film / Production', video: 'videos/mile-x.mp4', additionalVideos: [{ title: 'Video 2', src: 'videos/mile-x-02.mp4' }] }
};

const cardMedia = {
  'card-a': 'images/redemption-thumb.jpg',
  'card-b': 'images/nocturnal-thumb.jpg',
  'card-c': 'images/blossom-thumb.jpg',
  'card-e': 'images/sara-khan-thumb.jpg',
  'card-f': 'images/gym-wale-bhaiya-thumb.jpg',
  'card-g': 'images/daood-khan-thumb.jpg',
  'card-i': 'images/floo-thumb.jpg',
  'card-j': 'images/socialite-seven-thumb.jpg',
  'card-l': 'images/navrang-saree-house-thumb.jpg',
  'card-m': 'images/real-estate-thumb.jpg',
  'card-n': 'images/VIP-pipes-thumb.jpg',
  'card-p': 'images/podcast-work-thumb.jpg'
};

const projectPosters = {
  redemption: 'images/redemption-thumb.jpg',
  nocturnal: 'images/nocturnal-thumb.jpg',
  blossom: 'images/blossom-thumb.jpg',
  'sara-khan': 'images/sara-khan-thumb.jpg',
  'gym-wale-bhaiya': 'images/gym-wale-bhaiya-thumb.jpg',
  'daood-khan': 'images/daood-khan-thumb.jpg',
  floo: 'images/floo-thumb.jpg',
  'navrang-saree-house': 'images/navrang-saree-house-thumb.jpg',
  'real-estate': 'images/real-estate-thumb.jpg',
  'vip-pipes': 'images/VIP-pipes-thumb.jpg',
  'podcast-work': 'images/podcast-work-thumb.jpg',
  'castrol-oil': 'images/collage-1.JPG',
  'ampere-electric': 'images/collage-1.JPG',
  'mile-x': 'images/collage-1.JPG'
};

const videoExtensions = /\.(mp4|webm|ogg|mov)(?:$|\?)/i;
const fallbackPoster = 'images/collage-1.JPG';
const mediaPosters = {
  'videos/bts-1.mp4': 'images/collage-1.JPG',
  'videos/bts-2.mp4': 'images/collage-2.jpg',
  'videos/bts-3.mp4': 'images/collage-3.jpg',
  'videos/bts-4.mp4': 'images/collage-4.JPG',
  'videos/bts-5.mp4': 'images/collage-5.JPG'
};
const loadVideo = (video) => {
  if (!video.hasAttribute('src')) {
    video.src = video.dataset.src;
  }
};

const mediaObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    loadVideo(entry.target);
    observer.unobserve(entry.target);
  });
}, { rootMargin: '300px' }) : null;

const createMediaElement = (source, alt, poster = fallbackPoster, autoplay = false) => {
  if (videoExtensions.test(source)) {
    const video = document.createElement('video');
    video.dataset.src = source;
    video.poster = poster;
    video.playsInline = true;
    video.preload = 'none';
    video.setAttribute('playsinline', '');
    video.setAttribute('aria-label', alt);
    if (autoplay) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.setAttribute('muted', '');
      video.setAttribute('loop', '');
      video.setAttribute('autoplay', '');
    } else {
      video.controls = false;
    }
    return video;
  }
  const image = document.createElement('img');
  image.src = source;
  image.alt = alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  return image;
};

const mountMedia = (slot) => {
  const source = slot.dataset.mediaSrc.trim();
  if (!source) return;
  const isMarqueeVideo = slot.matches('.marquee-image');
  const media = createMediaElement(
    source,
    slot.dataset.mediaAlt || 'Project media',
    slot.dataset.mediaPoster || mediaPosters[source] || fallbackPoster,
    isMarqueeVideo
  );
  slot.prepend(media);
  if (!(media instanceof HTMLVideoElement)) return;

  if (isMarqueeVideo) {
    if (mediaObserver) mediaObserver.observe(media);
    else loadVideo(media);
    return;
  }

  let playButton = slot.querySelector('.video-play-button');
  if (!playButton) {
    playButton = document.createElement('button');
    playButton.className = 'video-play-button';
    playButton.type = 'button';
    playButton.textContent = '▶';
    slot.append(playButton);
  }
  let status = slot.querySelector('[data-video-status]');
  if (!status) {
    status = document.createElement('span');
    status.className = 'video-status';
    status.dataset.videoStatus = '';
    status.setAttribute('aria-live', 'polite');
    slot.append(status);
  }
  const showPlayButton = () => {
    playButton.hidden = false;
    playButton.setAttribute('aria-label', media.ended ? 'Replay video' : 'Play video');
  };
  media.addEventListener('error', () => {
    status.textContent = 'Unable to load video. Check your connection and try again.';
    console.error('Unable to load video:', media.error);
  });
  playButton.addEventListener('click', () => {
    loadVideo(media);
    media.controls = true;
    status.textContent = '';
    media.play().catch((error) => {
      status.textContent = 'Video could not be played. Try again.';
      console.error('Unable to play video:', error);
    });
  });
  media.addEventListener('playing', () => { playButton.hidden = true; });
  media.addEventListener('pause', showPlayButton);
  media.addEventListener('ended', showPlayButton);
};

document.querySelectorAll('[data-media-src]').forEach(mountMedia);

document.querySelectorAll('.project-card').forEach((link) => {
  const destination = link.href;
  const title = link.querySelector('.card-label')?.textContent.trim() || 'Project';
  const card = document.createElement('article');
  card.className = link.className;
  while (link.firstChild) card.append(link.firstChild);

  const revealButton = document.createElement('button');
  revealButton.className = 'card-trigger';
  revealButton.type = 'button';
  revealButton.setAttribute('aria-label', `Show Explore link for ${title}`);
  const exploreLink = document.createElement('a');
  exploreLink.className = 'card-explore';
  exploreLink.href = destination;
  exploreLink.setAttribute('aria-label', `Explore ${title}`);
  exploreLink.textContent = 'Explore';
  card.append(revealButton, exploreLink);
  link.replaceWith(card);
});

document.querySelectorAll('.project-card').forEach((card) => {
  const source = Object.entries(cardMedia).find(([className]) => card.classList.contains(className))?.[1];
  if (!source) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'media-slot card-media';
  wrapper.append(createMediaElement(source, `${card.querySelector('.card-label')?.textContent || 'Project'} thumbnail`));
  card.prepend(wrapper);
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.15 }) : null;
document.querySelectorAll('.reveal').forEach((element) => revealObserver ? revealObserver.observe(element) : element.classList.add('visible'));

document.querySelectorAll('[data-rail]').forEach((rail) => {
  const track = rail.querySelector('.project-track');
  const cards = [...track.querySelectorAll('.project-card')];
  let current = 0;
  let startX = 0;
  let dragging = false;
  let activePointerId = null;
  const maxIndex = () => Math.max(0, cards.length - (window.innerWidth < 800 ? 1.25 : 4));
  const update = () => {
    if (!cards.length) return;
    const width = cards[0].getBoundingClientRect().width + 16;
    track.style.transform = `translateX(-${current * width}px)`;
  };
  const move = (direction) => { current = Math.max(0, Math.min(current + direction, Math.ceil(maxIndex()))); update(); };
  rail.parentElement.querySelector('[data-slide="prev"]').addEventListener('click', () => move(-1));
  rail.parentElement.querySelector('[data-slide="next"]').addEventListener('click', () => move(1));
  rail.addEventListener('pointerdown', (event) => {
    activePointerId = event.pointerId;
    startX = event.clientX;
    dragging = false;
  });
  rail.addEventListener('pointermove', (event) => {
    if (event.pointerId !== activePointerId || dragging || Math.abs(event.clientX - startX) < 8) return;
    dragging = true;
    rail.setPointerCapture(event.pointerId);
  });
  rail.addEventListener('pointerup', (event) => {
    if (event.pointerId !== activePointerId) return;
    const distance = event.clientX - startX;
    if (dragging && Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
    dragging = false;
    activePointerId = null;
  });
  rail.addEventListener('pointercancel', () => {
    dragging = false;
    activePointerId = null;
  });
  window.addEventListener('resize', update);
  update();

  cards.forEach((card) => {
    const revealButton = card.querySelector('.card-trigger');
    const exploreLink = card.querySelector('.card-explore');
    revealButton.addEventListener('click', () => {
      rail.querySelectorAll('.project-card.is-exploring').forEach((activeCard) => {
        activeCard.classList.remove('is-exploring');
      });
      card.classList.add('is-exploring');
      exploreLink.focus();
    });
  });
});

const detail = document.querySelector('[data-project-detail]');
if (detail) {
  const requestedKey = new URLSearchParams(window.location.search).get('id');
  const key = projects[requestedKey] ? requestedKey : 'redemption';
  const project = projects[key];
  document.title = `${project.title} | RNM Productions`;
  detail.querySelector('[data-project-title]').textContent = project.title;
  detail.querySelector('[data-project-subtitle]').textContent = project.title;
  detail.querySelector('[data-project-category]').textContent = project.category;
  detail.querySelector('[data-project-type]').textContent = project.type;
  detail.querySelector('[data-project-format]').textContent = project.format;
  detail.querySelector('[data-project-description]').textContent = project.description;
  detail.querySelector('[data-project-credits]').textContent = project.credits;

  const projectMedia = detail.querySelector('[data-project-media]');
  const portraitProjects = new Set([
    'blossom', 'sara-khan', 'daood-khan', 'gym-wale-bhaiya',
    'floo', 'navrang-saree-house', 'real-estate', 'vip-pipes', 'podcast-work',
    'castrol-oil', 'ampere-electric', 'mile-x'
  ]);
  projectMedia.classList.toggle('is-portrait', portraitProjects.has(key));
  projectMedia.dataset.mediaSrc = project.video || `videos/${key}.mp4`;
  projectMedia.dataset.mediaPoster = projectPosters[key] || fallbackPoster;
  projectMedia.dataset.mediaAlt = `${project.title} video`;
  mountMedia(projectMedia);

  const videoStack = detail.querySelector('[data-project-video-stack]');
  (project.additionalVideos || []).forEach((video, index) => {
    const frame = document.createElement('section');
    frame.className = 'project-video-frame';
    const heading = document.createElement('h2');
    heading.className = 'project-video-title';
    heading.textContent = video.title || `Video ${index + 2} Title`;
    const slot = document.createElement('div');
    slot.className = 'project-video media-slot is-portrait';
    slot.dataset.mediaSrc = video.src;
    slot.dataset.mediaPoster = projectPosters[key] || fallbackPoster;
    slot.dataset.mediaAlt = `${project.title} ${heading.textContent}`;
    slot.innerHTML = '<button class="video-play-button" type="button" aria-label="Play video">&#9654;</button><span class="video-status" data-video-status aria-live="polite"></span>';
    frame.append(heading, slot);
    videoStack.append(frame);
    mountMedia(slot);
  });

  if (project.bts) {
    const projectSplit = detail.querySelector('.project-split');
    projectSplit.classList.add('has-bts');
    const gallery = document.createElement('div');
    gallery.className = 'bts-gallery';
    gallery.setAttribute('aria-label', 'Behind the scenes gallery');
    projectSplit.append(gallery);
    project.bts.forEach((source, index) => {
      const frame = document.createElement('div');
      frame.className = 'media-slot bts-image';
      frame.dataset.mediaSrc = source;
      frame.dataset.mediaPoster = projectPosters[key] || fallbackPoster;
      frame.dataset.mediaAlt = `${project.title} BTS ${String(index + 1).padStart(2, '0')}`;
      const label = document.createElement('span');
      label.textContent = frame.dataset.mediaAlt;
      frame.append(label);
      gallery.append(frame);
      mountMedia(frame);
    });
  }
}

document.addEventListener('pointermove', (event) => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }
});
