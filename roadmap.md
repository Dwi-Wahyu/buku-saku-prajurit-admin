# 🛣️ Roadmap Belajar Nuxt 3 untuk Pemula

## ✅ 1. Dasar-dasar Web Development

### 📌 Target:

Memahami dasar pembuatan halaman web (frontend) dengan HTML, CSS, dan JavaScript.

### 📚 Materi:

- HTML

  - Elemen dasar (`<div>`, `<p>`, `<a>`, `<img>`, `<form>`)
  - Semantic HTML

- CSS

  - Styling dasar (color, font, padding, margin)
  - Flexbox dan Grid
  - Responsive design (media queries)

- JavaScript Dasar

  - Variable (`let`, `const`)
  - Function dan event handling
  - Array, loop (`for`, `forEach`)
  - DOM Manipulation (`document.querySelector`)
  - Conditional (`if`, `switch`)

## ✅ 2. Belajar Vue 3 (Dasar)

### 📌 Target:

Menguasai framework Vue 3 sebagai fondasi sebelum belajar Nuxt 3.

### 📚 Materi:

- Reactive (`ref`, `reactive`)
- Template syntax (`{{ }}`, `v-bind`, `v-model`, `v-if`, `v-for`)
- Component dasar dan passing `props`
- Event dan `emit` antar-komponen
- Lifecycle hooks (`onMounted`, `onUpdated`)
- Computed dan Watchers

## ✅ 3. Belajar Nuxt 3 (Dasar)

### 📌 Target:

Memahami cara kerja dan struktur proyek Nuxt 3.

### 🧰 Instalasi:

```bash
npx nuxi init my-nuxt-app
cd my-nuxt-app
npm install
npm run dev
```

### 📚 Materi:

- Struktur folder Nuxt 3 (`pages/`, `components/`, `layouts/`, `composables/`, `server/`)
- File-based routing (`pages/index.vue`, `pages/about.vue`)
- Dynamic route (`pages/blog/[slug].vue`)
- Nested routes (`pages/dashboard/settings.vue`)
- Layouts (`layouts/default.vue`, `layouts/custom.vue`)
- Components dan komposisi ulang
- Composables (`useFetch`, `useAsyncData`)
- Plugin (custom JS/TS global)
- State management dengan Pinia
- Middleware (route guards, auth logic)

---

## ✅ 4. Bangun Proyek Nyata (Latihan)

### 📌 Target:

Menerapkan yang telah dipelajari dengan membangun mini project.

### 💡 Ide Proyek:

- Todo App dengan Pinia
- Blog statis dengan Nuxt Content
- Dashboard Admin + Auth Middleware
- Integrasi dengan API eksternal (misalnya API cuaca)

---

## ✅ 5. Eksplorasi Ekosistem Nuxt 3

### 📌 Tools & Teknologi Pendukung:

- Tailwind CSS (styling modern)
- Nuxt Content (buat blog statis dari Markdown)
- Nuxt Auth atau AuthJS (autentikasi)
- Supabase / Firebase (backend as a service)
- Nuxt Image / Nuxt UI

---

## ✅ 6. Deployment

### 📌 Hosting:

- Hosting di Vercel atau Netlify
- Build command:

```bash
npm run build
npm run preview
```

- Atur `nuxt.config.ts` untuk environment dan public runtime config
- Setup domain custom (opsional)

---

## 🎯 Saran Waktu Belajar

| Tahap                   | Waktu Ideal      |
| ----------------------- | ---------------- |
| Dasar Web (HTML/CSS/JS) | 2–4 minggu       |
| Vue 3                   | 2–3 minggu       |
| Nuxt 3 Dasar            | 3–4 minggu       |
| Proyek Latihan          | 3 minggu ke atas |
| Deployment & Tools      | Ongoing          |

---

Jika kamu ingin versi **Markdown interaktif + checklist**, atau versi `Notion`/`PDF`, saya bisa bantu juga. Mau dilanjut ke template proyek Nuxt 3 untuk pemula?
