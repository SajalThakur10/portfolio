const projects = {
  redemption: { title: 'Redemption', category: 'Passion Projects / 01', type: 'Fashion film', format: 'Short film / editorial', description: 'A study in transformation, shadow and the quiet voltage of a new beginning.', credits: 'RNM Productions / Direction / Production', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  nocturnal: { title: 'Nocturnal', category: 'Passion Projects / 02', type: 'Editorial film', format: 'Fashion film / photography', description: 'A nocturne built from electric color, late hours and a silhouette that refuses to disappear.', credits: 'RNM Productions / Creative Direction / Film', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  blossom: { title: 'Blossom', category: 'Passion Projects / 03', type: 'Fashion story', format: 'Editorial / stills', description: 'Texture, movement and a softer kind of power captured in a sequence of evolving frames.', credits: 'RNM Productions / Photography / Production', video: 'videos/blossom.mp4', bts: ['videos/blossom-bts-01.MP4', 'videos/blossom-bts-02.mp4', 'videos/blossom-bts-03.mp4', 'videos/blossom-bts-04.mp4'] },
  'sara-khan': { title: 'Sara Khan', category: 'Influencer Content / 01', type: 'Personal story', format: 'Portrait film', description: 'A portrait of presence, built around the details that make a public image feel human.', credits: 'RNM Productions / Film / Photography', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'gym-wale-bhaiya': { title: 'Gym Wale Bhaiya', category: 'Influencer Content / 02', type: 'Content series', format: 'Branded social content', description: 'Energy, rhythm and honest effort turned into a repeatable visual language for social.', credits: 'RNM Productions / Concept / Production', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'daood-khan': { title: 'Daood Khan', category: 'Influencer Content / 03', type: 'Portrait series', format: 'Digital campaign', description: 'A character-led portrait series that lets craft, charisma and considered light lead the way.', credits: 'RNM Productions / Direction / Photography', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  floo: { title: 'Floo', category: 'Commercial Work / 01', type: 'Brand film', format: 'Commercial / campaign', description: 'A product world with a clear pulse: tactile, contemporary and made to stay with you.', credits: 'RNM Productions / Film / Production', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'socialite-seven': { title: 'Socialite Seven', category: 'Commercial Work / 02', type: 'Campaign', format: 'Brand campaign', description: 'A campaign that turns an everyday ritual into an invitation to look closer.', credits: 'RNM Productions / Creative Direction / Film', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'navrang-saree-house': { title: 'Navrang Saree House', category: 'Commercial Work / 03', type: 'Retail story', format: 'Brand film / photography', description: 'A celebration of color and continuity for a house where every fabric carries a memory.', credits: 'RNM Productions / Film / Photography', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'real-estate': { title: 'Real Estate', category: 'Commercial Work / 04', type: 'Space / architecture', format: 'Property film', description: 'Architecture rendered as atmosphere: a measured journey through light, volume and place.', credits: 'RNM Productions / Direction / Film', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'vip-pipes': { title: 'VIP Pipes', category: 'Commercial Work / 05', type: 'Brand film', format: 'Brand story / campaign', description: 'A brand story shaped around the design, quality and everyday utility of VIP Pipes.', credits: 'RNM Productions / Creative / Production', video: 'videos/VIP-pipes.mp4', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] },
  'podcast-work': { title: 'Podcast Work', category: 'Commercial Work / 06', type: 'Conversation series', format: 'Multi-camera / digital', description: 'A considered visual home for ideas in conversation, with room for every voice to land.', credits: 'RNM Productions / Multi-camera / Production', bts: ['videos/bts-1.mp4', 'videos/bts-2.mp4', 'videos/bts-3.mp4', 'videos/bts-4.mp4'] }
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
  'card-n': 'images/vip-pipes-thumb.jpg',
  'card-p': 'images/podcast-work-thumb.jpg'
};

const videoExtensions = /\.(mp4|webm|ogg|mov)(?:$|\?)/i;
const collageOneSource = 'images/collage-1.JPG';
const createMediaElement = (source, alt, isHero = false) => {
  if (videoExtensions.test(source)) {
    const video = document.createElement('video');
    video.src = source;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    if (isHero) video.controls = true;
    video.setAttribute('aria-label', alt);
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
  const media = createMediaElement(source, slot.dataset.mediaAlt || 'Project media', slot.matches('.project-video'));
  slot.prepend(media);
};

const firstCollageTile = document.querySelector('.intro-collage .collage-tile');
if (firstCollageTile) firstCollageTile.dataset.mediaSrc = collageOneSource;
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
  const update = () => { const width = cards[0].getBoundingClientRect().width + 16; track.style.transform = `translateX(-${current * width}px)`; };
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
  const project = projects[key] || projects.redemption;
  document.title = `${project.title} | RNM Productions`;
  detail.querySelector('[data-project-title]').textContent = project.title;
  detail.querySelector('[data-project-subtitle]').textContent = project.title;
  detail.querySelector('[data-project-category]').textContent = project.category;
  detail.querySelector('[data-project-type]').textContent = project.type;
  detail.querySelector('[data-project-format]').textContent = project.format;
  detail.querySelector('[data-project-description]').textContent = project.description;
  detail.querySelector('[data-project-credits]').textContent = project.credits;
  detail.querySelector('[data-project-video-label]').textContent = `${project.type} / PROJECT FILM`;
  const projectMedia = detail.querySelector('[data-project-media]');
  const videoSource = Object.hasOwn(project, 'video') ? project.video : `videos/${key}.mp4`;
  if (videoSource) {
    projectMedia.dataset.mediaSrc = videoSource;
    mountMedia(projectMedia);
  }

  const btsSection = detail.querySelector('[data-bts-section]');
  if (btsSection && project.bts) {
    btsSection.style.display = 'grid';
    btsSection.querySelectorAll('.bts-image').forEach((frame, index) => {
      const label = `${project.title} BTS ${String(index + 1).padStart(2, '0')}`;
      frame.dataset.mediaSrc = project.bts[index];
      frame.dataset.mediaAlt = label;
      frame.querySelector('span').textContent = label;
      mountMedia(frame);
    });
  } else if (btsSection) {
    btsSection.style.display = 'none';
  }
}

document.addEventListener('pointermove', (event) => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }
});
