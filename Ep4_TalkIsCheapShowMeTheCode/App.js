import ReactDom from "react-dom/client"; 
import React from "react";

const Header = () => {
    return (
        <div className = "head" >
            <img className="logo" alt="logo" src="https://dynamic.design.com/preview/logodraft/45acf276-9819-49ca-a552-1622fa18105c/image/large.png"/>
            <ul className="nav-items">
                <li>Home</li>
                <li>Contact Us</li>
                <li>Orders</li>
            </ul>
        </div>
    )
};
const Search = ()=>{
    return (
        <div className="search">

        </div>
    )
}
const resList = [
    {
      "info": {
        "id": "26724",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/2c6a575c-6bd2-4f92-ba6e-dcb194accfda_26724.JPG",
        "locality": "West Patel Nagar",
        "areaName": "West Patel Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Rolls & Wraps",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "31K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-24 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "4.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/kfc-west-patel-nagar-rest26724",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "253722",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/368ea0a0-4541-49c1-9740-feaec7ff1e89_253722.JPG",
        "locality": "Rachna Cinema Complex",
        "areaName": "Rajendra Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "22K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 06:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/mcdonalds-rachna-cinema-complex-rajendra-place-rest253722",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "24194",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/f30d4c9d-7dc9-4fe6-8263-b7dc215ec156_24194.JPG",
        "locality": "Karol Bagh",
        "areaName": "East Patel Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "18K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 03:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/dominos-pizza-karol-bagh-east-patel-nagar-rest24194",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "343711",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_343711.JPG",
        "locality": "Karol Bagh",
        "areaName": "East Patel Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.5,
        "parentId": "281782",
        "avgRatingString": "4.5",
        "totalRatingsString": "5.4K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-karol-bagh-east-patel-nagar-rest343711",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "51710",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/18/5e59e611-0794-4f62-8307-b749fb7d286a_51710.JPG",
        "locality": "Karol Bagh",
        "areaName": "East Patel Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "6.8K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/theobroma-karol-bagh-east-patel-nagar-rest51710",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "336057",
        "name": "Wendy's Burgers",
        "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
        "locality": "DDA Market",
        "areaName": "Rajendra Place",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "972",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.7K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-24 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/wendys-burgers-dda-market-rajendra-place-rest336057",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "523200",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "js7g8baosslodwoq7nk5",
        "locality": "West Patel Nagar",
        "areaName": "West Patel Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "4961",
        "avgRatingString": "4.0",
        "totalRatingsString": "6.6K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 08:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "152"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-west-patel-nagar-rest523200",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "20055",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/5a71f626-9e4b-4cbd-a58f-112095352c48_20055.jpg",
        "locality": "Karol Bagh",
        "areaName": "Patel Nagar, Connaught Place",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "2",
        "avgRatingString": "4.4",
        "totalRatingsString": "16K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-01 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/subway-karol-bagh-patel-nagar-connaught-place-rest20055",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "53774",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Tagore Market",
        "areaName": "Kirti Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/pizza-hut-tagore-market-kirti-nagar-rest53774",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "508441",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Patel Nagar Metro Station",
        "areaName": "South Patel Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "1776",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chinese.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Momos.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Momos.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/wow-momo-patel-nagar-metro-station-south-patel-nagar-rest508441",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "129211",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/df52cfea-a2a1-4810-a3ab-73473fdd80da_129211.jpg",
        "locality": "Patel Rd",
        "areaName": "Shadipur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "21K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-25 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-28f17abe-a6ce-4e0a-bc1b-c607832afca2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/burger-king-patel-rd-shadipur-rest129211",
        "type": "WEBLINK"
      }
    }];
      
const RestaurantCard = (props) =>{
    const {resObj}=props;
    const {cloudinaryImageId,name,locality,cuisines,avgRating}= resObj?.info
    return (
        <div className="res-card">
                <img alt="restaurant-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+resObj.info.cloudinaryImageId}/>
                <div className="res-detail">
                    <h3>{name}</h3>
                    <h4>{locality}</h4>
                </div>
                <div className="res-detail-misc">
                    <h5>{cuisines.join(",")}</h5>
                    <h5>{avgRating}</h5>
                </div>
        </div>
    )
}
const Body = () => {
    let count=0;
    const items = [];

    // Use a while loop to populate the items array
    while (count < resList.length) {
        items.push(<RestaurantCard resObj={resList[count]} />);
        count++;
    }
    return (
        <div className="body">
            <Search/>
            <div className="res-container">
                
                {/* <RestaurantCard resObj={resList[0]}/>
                <RestaurantCard resObj={resList[1]}/>
                <RestaurantCard resObj={resList[2]}/>
                <RestaurantCard resObj={resList[3]}/>
                <RestaurantCard resObj={resList[4]}/>
                <RestaurantCard resObj={resList[5]}/>
                <RestaurantCard resObj={resList[6]}/>
                <RestaurantCard resObj={resList[7]}/>
                <RestaurantCard resObj={resList[8]}/> */}

                {/* One way is to use while loop
                    {items}
                */}

                {/* Second way is to use map filter */}
                {resList.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id}resObj={restaurant}/>
                ))}
            </div>    
        </div>

    );
};

const App = () => {
    return (
        <div className="app">
        {/* Place Header component */}
        <Header/>
        {/* Place Body component */}
        <Body/>
        {/* Place Footer component */}
        </div>
    )
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App/>);