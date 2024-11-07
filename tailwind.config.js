module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        24: "24px",
      },
      filter: {
        'custom-filter': 'brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(1202%) hue-rotate(179deg) brightness(97%) contrast(101%)',
        'black-filter': ' brightness(0) saturate(100%) invert(13%) sepia(44%) saturate(305%) hue-rotate(168deg) brightness(101%) contrast(98%)',
      },
      colors: {
        customGray: "#1F2933",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(180, 192, 208, 0) 0%, #B4C0D0 77.83%)",
      },
      screens: {
        lg: { max: "1024px" },
        lg2: { max: "1370px" },
        xs: { max: "678px" },
        lg3: {'max': '1000px'},  
        l2: {'max': '1145px'},  
        small: {'max': '465px'},  
        lg4:{'max': '1540px'},
        xl:{'max': '1200px'}
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  
  ],
}
