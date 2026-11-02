(() => {
      const box = document.getElementById('lightbox');
      const previewImage = document.getElementById('lightboxImage');
      const caption = document.getElementById('lightboxCaption');
      const link = document.getElementById('lightboxLink');
      const closeButton = box.querySelector('.lightbox-close');
      let lastFocused = null;

      function openPreview(tile) {
        lastFocused = tile;
        previewImage.src = tile.dataset.full;
        previewImage.alt = tile.querySelector('img').alt;
        caption.textContent = tile.dataset.caption;
        link.href = tile.dataset.link;
        box.classList.add('is-open');
        box.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeButton.focus();
      }
      function closePreview() {
        box.classList.remove('is-open');
        box.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        previewImage.src = '';
        if (lastFocused) lastFocused.focus();
      }
      document.querySelectorAll('.photo').forEach(tile => tile.addEventListener('click', () => openPreview(tile)));
      closeButton.addEventListener('click', closePreview);
      box.addEventListener('click', event => { if (event.target === box) closePreview(); });
      document.addEventListener('keydown', event => { if (event.key === 'Escape' && box.classList.contains('is-open')) closePreview(); });
    })();