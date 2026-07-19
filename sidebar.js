const existingAtlasSidebar = document.querySelector('.wiki-sidebar');

if (!existingAtlasSidebar) {
  const atlasMain = document.querySelector('main');

  if (atlasMain) {
    const currentPath = window.location.pathname.replace(/index\.html$/, '') || '/';
    const isActive = (path) => (path === '/' ? currentPath === '/' : currentPath === path || currentPath.startsWith(path)) ? ' is-current' : '';
    const bannerForPath = () => {
      if (currentPath.startsWith('/runes') || ['/database/', '/skills/'].includes(currentPath)) return { src: '/assets/rune-atlas-tree.png', alt: 'Original pixel-art rune tree glowing over a floating platform', label: 'RUNE & REFERENCE ATLAS' };
      if (currentPath.startsWith('/builds') || currentPath.startsWith('/tier-list') || currentPath.startsWith('/beginner')) return { src: '/assets/atlas-role-roster.png', alt: 'Original pixel-art fantasy roster with ranger, guardian and arcane scholar roles', label: 'BUILD FIELD ROSTER' };
      if (currentPath.startsWith('/drops') || currentPath.startsWith('/drop-rates') || ['/gear/', '/market/', '/codes/', '/pets/'].includes(currentPath)) return { src: '/assets/atlas-loot-cache.png', alt: 'Original pixel-art treasure chest with fantasy gear and glowing rune crystal', label: 'LOOT & ITEM DESK' };
      return { src: '/assets/atlas-farm-expedition.png', alt: 'Original pixel-art expedition path leading through glowing portals', label: 'FARMING & PROGRESSION' };
    };
    const pageHero = atlasMain.querySelector('.page-hero');
    if (pageHero) {
      const visual = bannerForPath();
      const banner = document.createElement('figure');
      banner.className = 'context-banner';
      banner.innerHTML = `<img src="${visual.src}" alt="${visual.alt}" width="1672" height="941" loading="eager"><figcaption>${visual.label}</figcaption>`;
      pageHero.after(banner);
    }
    const sidebar = document.createElement('aside');
    sidebar.className = 'wiki-sidebar';
    sidebar.setAttribute('aria-label', 'Atlas sections');
    sidebar.innerHTML = `
      <div class="sidebar-topline"><span class="signal"></span> ATLAS INDEX</div>
      <nav class="sidebar-nav" aria-label="Atlas index navigation">
        <div><p>START HERE</p><a class="${isActive('/')}" href="/"><span>⌂</span> Home</a><a class="${isActive('/beginner-guide/')}" href="/beginner-guide/"><span>01</span> Beginner route</a><a class="${isActive('/updates/')}" href="/updates/"><span>◌</span> Patch desk</a></div>
        <div><p>DATABASE</p><a class="${isActive('/runes/')}" href="/runes/"><span>✦</span> Runes</a><a class="${isActive('/rune-tree/')}" href="/rune-tree/"><span>↗</span> Rune Tree</a><a class="${isActive('/gear/')}" href="/gear/"><span>◇</span> Gear</a><a class="${isActive('/skills/')}" href="/skills/"><span>⌁</span> Skills</a><a class="${isActive('/stages/')}" href="/stages/"><span>▤</span> Stages</a><a class="${isActive('/pets/')}" href="/pets/"><span>◒</span> Pets</a></div>
        <div><p>TOOLS & ROUTES</p><a class="${isActive('/calculators/')}" href="/calculators/"><span>◷</span> Calculators</a><a class="${isActive('/calculators/chest-timer/')}" href="/calculators/chest-timer/"><span>↳</span> Chest Timer</a><a class="${isActive('/drop-rates/')}" href="/drop-rates/"><span>◈</span> Drop sources</a><a class="${isActive('/market/')}" href="/market/"><span>◫</span> Market notes</a></div>
        <div><p>COMMUNITY NOTES</p><a class="${isActive('/builds/')}" href="/builds/"><span>⚔</span> Builds</a><a class="${isActive('/tier-list/')}" href="/tier-list/"><span>≋</span> Tier Lists</a><a class="${isActive('/guides/')}" href="/guides/"><span>→</span> All Guides</a><a class="${isActive('/codes/')}" href="/codes/"><span>⌘</span> Codes check</a></div>
      </nav>
      <div class="sidebar-status"><span></span><strong>30 PAGE DESK</strong><small>English launch structure<br />Current patch tracked: v1.00.17</small></div>`;

    const shell = document.createElement('div');
    shell.className = 'wiki-shell article-shell';
    atlasMain.before(shell);
    shell.append(sidebar, atlasMain);
    atlasMain.classList.add('wiki-main');
  }
}
