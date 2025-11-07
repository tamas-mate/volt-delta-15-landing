const navLinks = [
  { label: "Home", link: "#hero" },
  { label: "Product", link: "#product-viewer" },
  { label: "Brand", link: "#showcase" },
  { label: "Performance", link: "#performance" },
  { label: "Features", link: "#features" },
  { label: "Footer", link: "#highlights" },
];

const performanceImages = [
  { id: "p1", src: "/code-editor.png" },
  { id: "p2", src: "/futuristic-shooter.png" },
  { id: "p3", src: "/photoshop.webp" },
  { id: "p4", src: "/sci-fi-game.jpg" },
  { id: "p5", src: "/gaming-laptop-middle2.png" },
  { id: "p6", src: "/unreal_materialeditor.png" },
  { id: "p7", src: "/video-edit.png" },
];

const performanceImgPositions = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: -7,
    bottom: 35,
  },
  {
    id: "p4",
    right: -10,
    bottom: 0,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: -8,
    bottom: 30,
  },
  {
    id: "p7",
    left: -11,
    bottom: 0,
  },
];

const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Volt Compose.",
    text: "Summarize threads and draft context-aware replies in one click-stay ahead of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "Volt Studio.",
    text: "Create or retouch visuals from a prompt or sketch. Upscale, remove, relight and done.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "Volt Summary.",
    text: "Shrink long articles and reports into clean bullet points and action items instantly.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "Volt Link.",
    text: "Wirelessly send photos and large files between your phone, PC, and Delta 15-no cables, no cloud.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "Volt Write.",
    text: "Polish any draft with tone, grammar, and style suggestions right where you type.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/videos/compose-email.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/edit-image.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/summarize.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/share.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/writing-ai.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "Privacy & Cookies", link: "#privacy" },
  { label: "Warranty & Returns", link: "#warranty" },
  { label: "Support", link: "#support" },
  { label: "Licenses & Legal", link: "#legal" },
  { label: "Sitemap", link: "#sitemap" },
];

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  performanceImages,
  performanceImgPositions,
};
