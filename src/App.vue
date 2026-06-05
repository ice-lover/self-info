<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="nav-inner">
        <div class="nav-logo">Portfolio</div>
        <ul class="nav-links">
          <li><a href="#about">关于我</a></li>
          <li><a href="#skills">专业技能</a></li>
          <li><a href="#portfolio">项目成果</a></li>
          <li><a href="#contact">联系方式</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero 区域 -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-avatar">Chen</div>
        <h1>你好，我是 <span class="highlight">陈怡豪</span></h1>
        <p class="title">GIS可视化开发 · 全栈开发工程师 · BIM建模师</p>
        <div class="hero-tags">
          <span>Vue.js</span>
          <span>JavaScript</span>
          <span>Flutter</span>
          <span>Python</span>
          <span>BIM (Revit)</span>
          <span>GIS</span>
        </div>
        <div class="hero-cta">
          <a href="#portfolio" class="btn btn-primary">查看我的作品</a>
          <a href="#contact" class="btn btn-outline">联系我</a>
        </div>
        <div class="stats">
          <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">技术方向</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">项目成果</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3+</div>
            <div class="stat-label">开发框架</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我 -->
    <section id="about">
      <div class="container">
        <h2 class="section-title">关于我</h2>
        <p class="section-subtitle">热爱技术，跨领域复合型人才，致力于用代码和建模创造价值</p>
        <div class="about-grid">
          <div class="about-text">
            <h3>跨领域的技术探索者</h3>
            <p>
              我是一名充满热情的全栈开发者和技术创作者，拥有横跨多个技术领域的项目经验。
              从BIM建筑建模到移动端APP开发，从GIS地理信息系统到Web全栈开发，再到Python自动化与数据采集，
              我始终保持对新技术的好奇心和学习热情。
            </p>
            <p>
              我相信技术不应被单一领域所限制，跨领域的技术融合才能创造出真正有价值的产品。
              在每一个项目中，我都秉持精益求精的态度，追求代码质量与用户体验的完美平衡。
            </p>
          </div>
          <div class="about-cards">
            <div class="about-card">
              <div class="icon">🎯</div>
              <h4>目标明确</h4>
              <p>以结果为导向，高效完成项目交付</p>
            </div>
            <div class="about-card">
              <div class="icon">💡</div>
              <h4>快速学习</h4>
              <p>持续学习新技术，快速适应新环境</p>
            </div>
            <div class="about-card">
              <div class="icon">🤝</div>
              <h4>团队协作</h4>
              <p>良好的沟通能力，善于团队合作</p>
            </div>
            <div class="about-card">
              <div class="icon">🔧</div>
              <h4>解决问题</h4>
              <p>善于分析并解决复杂技术问题</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 专业技能 -->
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">专业技能</h2>
        <p class="section-subtitle">覆盖多个技术栈，从底层建模到上层应用开发</p>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in skills" :key="skill.name">
            <div class="icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <div class="skill-tags">
              <span v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
            </div>
            <p>{{ skill.desc }}</p>
            <div class="skill-bar">
              <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目成果 -->
    <section id="portfolio">
      <div class="container">
        <h2 class="section-title">项目成果</h2>
        <p class="section-subtitle">来自不同技术领域的实践成果展示</p>
        
        <div class="portfolio-filter">
          <button 
            v-for="cat in categories" 
            :key="cat.key"
            :class="['filter-btn', { active: activeCategory === cat.key }]"
            @click="activeCategory = cat.key"
          >
            {{ cat.label }}
          </button>
        </div>

        <div class="portfolio-grid">
          <div 
            class="portfolio-item" 
            v-for="item in filteredProjects" 
            :key="item.title"
            @click="openLightbox(item)"
          >
            <div class="img-wrap">
              <img v-if="item.img" :src="item.img" :alt="item.title" />
              <span v-else>{{ item.placeholder }}</span>
            </div>
            <div class="info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 图片放大弹窗 -->
    <div class="lightbox" v-if="lightboxVisible" @click.self="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">&times;</button>
      <div class="lightbox-content">
        <img :src="lightboxItem?.img" :alt="lightboxItem?.title" />
        <div class="lightbox-info">
          <h3>{{ lightboxItem?.title }}</h3>
          <p>{{ lightboxItem?.desc }}</p>
        </div>
      </div>
    </div>

    <!-- 联系方式 -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">联系方式</h2>
        <p class="section-subtitle">期待与您沟通，共创未来</p>
        <div class="contact-grid">
          <a href="mailto:3277453813@qq.com" class="contact-card">
            <div class="icon">📧</div>
            <h4>邮箱</h4>
            <p>3277453813@qq.com</p>
          </a>
          <a href="tel:+8613536690571" class="contact-card">
            <div class="icon">📱</div>
            <h4>电话</h4>
            <p>+86 135 3669 0571</p>
          </a>
          <a href="#" class="contact-card">
            <div class="icon">💼</div>
            <h4>GitHub</h4>
            <p>github.com/ice-lover</p>
          </a>
          <a href="#" class="contact-card">
            <div class="icon">📍</div>
            <h4>所在地</h4>
            <p>中国 · 长春</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <p>&copy; 2026 个人简历 | 用技术创造价值</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const skills = [
  {
    icon: '🏗️',
    name: 'BIM 建模',
    tags: ['Revit', '3D建模', '建筑'],
    desc: '精通Revit建模，能够完成复杂建筑结构的BIM模型设计与呈现，包括螺旋楼梯、屋顶等建筑构件。',
    level: 85
  },
  {
    icon: '📱',
    name: 'Flutter 移动端开发',
    tags: ['Dart', '跨平台', 'UI'],
    desc: '使用Flutter框架进行跨平台移动应用开发，具备完整的APP开发流程经验，从界面设计到功能实现。',
    level: 80
  },
  {
    icon: '🗺️',
    name: 'GIS 制图与可视化',
    tags: ['GIS', '空间分析', '数据可视化'],
    desc: '掌握GIS空间数据分析和可视化技术，能够制作GDP迁移、冷热点分析、聚类分析等地理信息图。',
    level: 82
  },
  {
    icon: '🌐',
    name: 'JavaScript 网页开发',
    tags: ['Vue.js', 'JavaScript', '前端'],
    desc: '熟练使用Vue.js框架进行前端开发，具备JavaScript全栈开发能力，能够构建数据可视化大屏。',
    level: 88
  },
  {
    icon: '🐍',
    name: 'Python 开发与爬虫',
    tags: ['Python', '爬虫', '数据采集'],
    desc: '使用Python进行网络爬虫开发、数据采集与可视化分析，包括气温趋势图、游戏开发等项目实践。',
    level: 85
  },
  {
    icon: '🗄️',
    name: '数据库开发',
    tags: ['数据库', 'SQL', '数据管理'],
    desc: '具备数据库设计与开发能力，能够进行数据建模、查询优化和数据管理，为应用提供坚实的数据支撑。',
    level: 78
  }
]

const categories = [
  { key: 'all', label: '全部' },
  { key: 'bim', label: 'BIM建模' },
  { key: 'flutter', label: 'Flutter APP' },
  { key: 'gis', label: 'GIS可视化' },
  { key: 'web', label: '网页开发' },
  { key: 'python', label: 'Python开发' }
]

const activeCategory = ref('all')

const baseUrl = import.meta.env.BASE_URL || '/'
const lightboxVisible = ref(false)
const lightboxItem = ref(null)

const openLightbox = (item) => {
  lightboxItem.value = item
  lightboxVisible.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxVisible.value = false
  lightboxItem.value = null
  document.body.style.overflow = ''
}

const projects = [
  // BIM
  { cat: 'bim', title: '螺旋楼梯建模', desc: 'Revit创建的1.2米螺旋楼梯BIM模型，展示复杂建筑结构建模能力', img: baseUrl + 'images/bim_stair.png', placeholder: '' },
  { cat: 'bim', title: '屋顶建模', desc: 'Revit创建的17.1米屋顶模型，体现建筑构件精细化建模水平', img: baseUrl + 'images/bim_roof.png', placeholder: '' },
  // Flutter
  { cat: 'flutter', title: '斋记 - 时令食谱与日历', desc: '时令食谱浏览、饮食日历打卡、菜品卡片展示，完整的三餐记录体系', img: baseUrl + 'images/flutter_app1.jpg', placeholder: '' },
  { cat: 'flutter', title: '斋记 - 登录与个人中心', desc: '用户登录注册、个人资料管理、二十四节气邮票收集系统', img: baseUrl + 'images/flutter_app2.jpg', placeholder: '' },
  { cat: 'flutter', title: '斋记 - 群聊与数据统计', desc: '群组聊天互动、点菜足迹记录、年度饮食活跃度热力图可视化', img: baseUrl + 'images/flutter_app3.jpg', placeholder: '' },
  { cat: 'flutter', title: '青笺日记 - 日记应用', desc: '日记登录系统、日记列表管理、富文本编辑器（支持加粗/斜体/下划线等格式）', img: baseUrl + 'images/flutter_app4.jpg', placeholder: '' },
  // Database
  { cat: 'flutter', title: '数据库设计', desc: '移动应用配套数据库设计与数据管理方案', img: baseUrl + 'images/flutter_db.png', placeholder: '' },
  // GIS
  { cat: 'gis', title: 'GDP中心点迁移', desc: '展示1997-2010年GDP中心点迁移轨迹的空间分析图', img: baseUrl + 'images/gis_gdp_migration.jpg', placeholder: '' },
  { cat: 'gis', title: 'GDP冷热点分析', desc: '基于空间统计的GDP冷热点分布分析与可视化呈现', img: baseUrl + 'images/gis_gdp_hotspot.jpg', placeholder: '' },
  { cat: 'gis', title: 'GDP区域对比', desc: '多区域GDP数据对比可视化，直观展示经济发展差异', img: baseUrl + 'images/gis_gdp_compare.jpg', placeholder: '' },
  { cat: 'gis', title: '聚类分析图', desc: '空间数据聚类分析结果的可视化展示', img: baseUrl + 'images/gis_cluster.jpg', placeholder: '' },
  { cat: 'gis', title: '底图制图', desc: 'GIS底图制作与地理信息可视化呈现', img: baseUrl + 'images/gis_map.jpg', placeholder: '' },
  // Web
  { cat: 'web', title: '全国数据大屏', desc: '基于JavaScript的全国数据可视化全局大屏，展示数据看板能力', img: baseUrl + 'images/web_global.png', placeholder: '' },
  { cat: 'web', title: '地市数据看板', desc: '地市级数据可视化看板，展示下钻分析能力', img: baseUrl + 'images/web_city.png', placeholder: '' },
  // Python
  { cat: 'python', title: '五子棋游戏', desc: '使用Python开发的五子棋对战游戏，包含完整游戏逻辑', img: baseUrl + 'images/py_gobang.png', placeholder: '' },
  { cat: 'python', title: '省会气温分布图', desc: '全国省会城市气温数据采集与热力图可视化', img: baseUrl + 'images/py_temp_map.png', placeholder: '' },
  { cat: 'python', title: '气温趋势分析', desc: '省会城市气温数据趋势可视化图表', img: baseUrl + 'images/py_temp_trend.png', placeholder: '' }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.cat === activeCategory.value)
})
</script>

<style scoped>
/* Component-specific styles if needed */
</style>