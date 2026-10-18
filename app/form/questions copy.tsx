type Question = {
  id: string;
  text: string;
  type: "text" | "number" | "radio";
  options?: string[];
};

const questions: Question[] = [
  {
    id: "tipo",
    text: "What type of video do you need?",
    type: "radio",
    options: [
      "🎬 Corporate / Institutional video",
      "📱 Social media video (Reel / TikTok)",
      "🎤 Interview or testimonial",
      "📷 Event coverage",
      "🎥 Commercial / Ad spot",
      "📚 Educational or tutorial video",
    ],
  },
  {
    id: "duracion",
    text: "What will be the approximate length of the final video?",
    type: "radio",
    options: [
      "⏱️ Less than 1 minute",
      "⏱️ 1–3 minutes",
      "⏱️ 3–5 minutes",
      "⏱️ More than 5 minutes",
    ],
  },
  {
    id: "uso",
    text: "Where will the video be used?",
    type: "radio",
    options: [
      "🌐 Social media (Instagram, TikTok, YouTube Shorts)",
      "💼 Website or corporate presentation",
      "📺 Television or other mass media",
    ],
  },
  {
    id: "produccion",
    text: "What production level do you envision?",
    type: "radio",
    options: [
      "⭐ Basic (simple recording, quick editing)",
      "⭐⭐ Intermediate (planning, multiple shots, refined editing)",
      "⭐⭐⭐ Advanced (script, multiple locations, graphics or animations)",
    ],
  },
  {
    id: "Metodo de contacto",
    text: "Which contact method do you prefer?",
    type: "radio",
    options: [
      "💻 Zoom",
      "📹 Google Meet",
      "💬 WhatsApp",
      "📞 Phone call",
      "🚫 I prefer not to be contacted",
    ],
  },
  {
    id: "name",
    text: "Tell us your name:",
    type: "text",
  },
  {
    id: "email",
    text: "Leave us your contact (email or phone):",
    type: "text",
  },
];