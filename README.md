
#  MojoBot - AI Personal Assistant

MojoBot is a modern, stylish, and intelligent AI personal assistant built with **Next.js 15**, **Tailwind CSS**, and **Google Gemini AI**. It supports multi-turn conversations and is designed with a sleek glassmorphic UI.

![MojoBot UI](https://img.shields.io/badge/UI-Glassmorphism-blue)
![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC)
![Gemini AI](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-orange)

##  Features

-   **Multi-turn Chat:** Remembers conversation history for contextual responses.
-   **Modern UI:** Beautiful glassmorphic design using Tailwind CSS.
-   **Responsive:** Fully optimized for Mobile, Tablet, and Desktop.
-   **Lucide Icons:** Clean and consistent iconography.
-   **Bengali & English Support:** Automatically detects and responds in both languages.
-   **Real-time Interaction:** Smooth animations and loading states.

##  Tech Stack

-   **Frontend:** [Next.js](https://nextjs.org/) (App Router)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **AI Engine:** [Google Gemini API](https://ai.google.dev/)
-   **Fonts:** Hind Siliguri (Bengali) & Inter (Latin)
-   **Deployment:** [Vercel](https://vercel.com/)

##  Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/muaz64/mojobot.git](https://github.com/muaz64/mojobot.git)
    cd mojobot
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your Gemini API Key:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see your bot in action!

##  Project Structure

```text
├── app/
│   ├── api/chat/route.js   # Backend API handling Gemini logic
│   ├── layout.js           # Global fonts and layout setup
│   └── page.js             # Main Chat UI
├── lib/
│   └── gemini.js           # Gemini AI configuration
├── public/                 # Static assets
└── tailwind.config.js      # Custom styling configurations

```

##  Important Note on Quota Limits

If you encounter a `500 Internal Server Error` with a `429 Quota Exceeded` message, it means the free tier limit for the specific model has been reached.

<!-- * **Solution:** Change the model name in `lib/gemini.js` from `gemini-3-flash-preview` to `gemini-1.5-flash` for higher rate limits. -->

##  Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://www.google.com/search?q=https://github.com/muaz64/mojobot/issues).

##  Author

**Muaz Muhammad**

 Github: [@muaz64](https://www.google.com/search?q=https://github.com/muaz64)

---

Developed  by Muaz Muhammad

