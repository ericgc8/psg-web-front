const pulsingBarPlugin = {
  id: 'pulsingBar',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const meta = chart.getDatasetMeta(0);
    const targetBar = meta.data[1]; // Index 1 corresponds to the "GlamSites Sales-Driven Website" bar

    if (targetBar) {
      ctx.save();
      ctx.globalAlpha = 0.5 + Math.sin(Date.now() / 200) * 0.25;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
      ctx.lineWidth = 4;
      ctx.strokeRect(
        targetBar.x,
        targetBar.y,
        targetBar.width,
        targetBar.height
      );
      ctx.restore();
    }
  },
};
