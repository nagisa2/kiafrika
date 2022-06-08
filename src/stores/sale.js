import { defineStore } from "pinia";

export const useSalesStore = defineStore("salesStore", {
  state: () => ({
    salesData: [
      {
        salesImg:
          "https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg",
        salesDescription: "We offer design such as logo, branding",
        salesName: "Graphic design",
        salesCompany: "Kiafrica",
        salesRating: 4.8,
        salesPrice: "750",
      },
      {
        salesImg:
          "https://media.istockphoto.com/photos/big-plotter-printer-with-led-picture-id1018455688?b=1&k=20&m=1018455688&s=170667a&w=0&h=H-qF5ostLs9MWl_UJcMu5ED3doE-YTwLWUbbKmGpQ8o=",
        salesDescription: "We offer printing of banners, stickers etc",
        SalesName: "Large format printing",
        salesCompany: "Digital creation",
        salesRating: 4.5,
        salesPrice: "750",
      },
      {
        salesImg:
          "https://cdn.pixabay.com/photo/2022/04/28/05/12/camera-7161766_960_720.jpg",
        salesDescription:
          "Come and capture the momories of your loved ones with us",
        salesName: "Video and photoshoot",
        salesCompany: "Smart studio",
        salesRating: 4.4,
        salesPrice: 750,
      },
      {
        salesImg:
          "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854__340.png",
        salesDescription: "Create apps and website for your business.",
        salesName: "Developer",
        salesCompany: "Kiafrika",
        salesRating: 4.7,
        salesPrice: "750",
      },
    ],
  }),
  getters: {},
  actions: {},
});
