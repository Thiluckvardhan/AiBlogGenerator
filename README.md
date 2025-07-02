# 🧠 AiBlogGenerator

An AI-powered blog generator that creates high-quality blog posts based on user-provided topics and word counts. Built with TypeScript, Vite, React, Tailwind CSS, and OpenAI's API. Hosted and synced with [Lovable](https://lovable.dev/projects/08af72fe-c1ee-4846-a443-5ed1c5c603c2).

---

## 🌐 Project Info

**Project URL:**
🔗 [Lovable Project Dashboard](https://lovable.dev/projects/08af72fe-c1ee-4846-a443-5ed1c5c603c2)

---

## 🛠️ Tech Stack

* ⚛️ React + TypeScript
* ⚡ Vite (build tool)
* 🎨 Tailwind CSS
* 🧹 shadcn-ui (component library)
* 🤖 OpenAI API (for content generation)
* 🐳 Docker & Docker Compose

---

## 🚀 Getting Started (Local Development)

### ✅ Requirements

* Node.js + npm
  Install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### 🧑‍💻 Local Setup

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to project folder
cd AiBlogGenerator

# Step 3: Install dependencies
npm install

# Step 4: Run the dev server
npm run dev

# The app will run at:
http://localhost:3000
```

### 🐳 Run with Docker

**Build and Run the Container**

```bash
docker build -t aiblog-generator .
docker run -p 3000:3000 aiblog-generator
```

**Or use Docker Compose**

```bash
docker-compose up --build
```

### 🔐 Environment Variables

Create a `.env` file in the root with your OpenAI API key:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

### 🧪 Development Commands

| Command         | Description          |
| --------------- | -------------------- |
| npm run dev     | Run local dev server |
| npm run build   | Build for production |
| npm run preview | Preview built files  |
| npm run lint    | Run ESLint checks    |

### 🧑‍💻 Other Development Options

**✏️ Edit Directly in GitHub**

* Open a file
* Click the ✏️ Edit icon
* Make changes → Commit

**💻 Use GitHub Codespaces**

* Go to your repo
* Click `Code` → `Codespaces`
* Launch a new Codespace
* Edit, commit, and push changes

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤛 Author

**Thiluck Vardhan Vemula**
🔗 GitHub

---

## 🙌 Acknowledgements

* OpenAI API
* Vite
* shadcn/ui
* Tailwind CSS
