import Rive from 'https://cdn.skypack.dev/rive-wasm';

const canvas = document.getElementById('riveCanvas');
const input = document.getElementById('fileInput');

input.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const buffer = await file.arrayBuffer();

  const rive = await Rive.new({
    canvas,
    buffer,
    autoplay: true
  });
});
