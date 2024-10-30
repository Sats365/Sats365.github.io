"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[626],{

/***/ 2626:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Body_Body; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(2209);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 4 modules
var emotion_styled_browser_esm = __webpack_require__(1876);
// EXTERNAL MODULE: ./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js
var react_yandex_maps_esm = __webpack_require__(8112);
// EXTERNAL MODULE: ./core/logic/cssUtils.ts
var cssUtils = __webpack_require__(7394);
// EXTERNAL MODULE: ./core/PageData/Body/atoms/link/link.tsx
var link_link = __webpack_require__(4841);
;// CONCATENATED MODULE: ./core/PageData/Body/atoms/link/linkData.ts
var Target;

(function (Target) {
  Target["blank"] = "_blank";
  Target["self"] = "_self";
})(Target || (Target = {}));
;// CONCATENATED MODULE: ./core/PageData/Body/atoms/address/address.tsx





var Address = function Address(_ref) {
  var data = _ref.data;
  var isStr = typeof data == "string";
  var element = isStr ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: data
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(link_link/* default */.Z, {
    data: {
      link: data.link,
      target: Target.blank
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: data.text
    })
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: element
  });
};

/* harmony default export */ var address = (Address);
// EXTERNAL MODULE: ./core/PageData/Body/atoms/heading/heading.tsx
var heading = __webpack_require__(3170);
;// CONCATENATED MODULE: ./core/PageData/Body/atoms/phone/phone.tsx




var Phone = function Phone(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(link_link/* default */.Z, {
    data: "tel:".concat(data),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: data
    })
  });
};

/* harmony default export */ var phone = (Phone);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/AddressBlock/AddressBlock.tsx




function _templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tdisplay: flex;\n\theight: 80vh;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding: 0 7rem !important;\n\n\t.content {\n\t\tgap: 4rem;\n\t\theight: 80%;\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\n\t\t.text {\n\t\t\tgap: 2.5rem;\n\t\t\tflex: 0.5;\n\t\t\tdisplay: flex;\n\t\t\tpadding: 2rem 0;\n\t\t\tflex-direction: column;\n\n\t\t\t.description {\n\t\t\t\tgap: 1.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 1.2rem;\n\t\t\t\tflex-direction: column;\n\n\t\t\t\t> div {\n\t\t\t\t\tgap: 0.5rem;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\n\t\t\t\t.bold {\n\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\tfont-family: Gilroy-Bold;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.map {\n\t\t\tflex: 1;\n\n\t\t\tymaps {\n\t\t\t\tborder-radius: 10px;\n\t\t\t}\n\t\t}\n\t}\n\n\t", " {\n\t\theight: auto;\n\t\tpadding: 0.5rem 1rem !important;\n\n\t\t.content {\n\t\t\t.text {\n\t\t\t\tflex: 1;\n\t\t\t\tgap: 1.5rem;\n\n\t\t\t\t.description {\n\t\t\t\t\tgap: 1rem;\n\n\t\t\t\t\t.mail {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.map {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var MyMap = function MyMap(_ref) {
  var center = _ref.center,
      zoom = _ref.zoom,
      defaultGeometry = _ref.defaultGeometry,
      hintContent = _ref.hintContent;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_yandex_maps_esm/* Map */.D5, {
    instanceRef: function instanceRef(ref) {
      ref && ref.behaviors.disable("scrollZoom");
    },
    defaultState: {
      center: center,
      zoom: zoom
    },
    style: {
      width: "100%",
      height: "100%"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_yandex_maps_esm/* Placemark */.ah, {
      defaultGeometry: defaultGeometry,
      properties: {
        hintContent: hintContent
      },
      modules: ["geoObject.addon.hint"]
    })
  });
};

var AddressBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref2) {
  var data = _ref2.data,
      className = _ref2.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    id: "contacts",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
          data: data.title
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "description",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "bold",
              children: "\u0410\u0434\u0440\u0435\u0441"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(address, {
              data: data.address
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "mail",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(link_link/* default */.Z, {
              data: "mailto:".concat(data.mail),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: data.mail
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(phone, {
                data: data.phone
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "bold",
              children: "\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: data.schedule
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "map",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_yandex_maps_esm/* YMaps */.Yy, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MyMap, {
            center: [55.969396, 46.77543],
            zoom: 15,
            defaultGeometry: [55.969396, 46.77543],
            hintContent: data.address
          })
        })
      })]
    })
  });
})(_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile); // background: var(--secondary-color);

/* harmony default export */ var AddressBlock_AddressBlock = (AddressBlock);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/CatalogBlock/CatalogBlock.tsx



function CatalogBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)([""]);

  CatalogBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CatalogBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className
  });
})(CatalogBlock_templateObject());
/* harmony default export */ var CatalogBlock_CatalogBlock = (CatalogBlock);
// EXTERNAL MODULE: ./core/PageData/Body/atoms/image/image.tsx
var image_image = __webpack_require__(9894);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/HallBlock/HallsBlock.tsx




function HallsBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.title {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t}\n\n\t.items {\n\t\tflex: 1;\n\t\tgap: 2rem;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\n\t\t.item {\n\t\t\tposition: relative;\n\n\t\t\t.image {\n\t\t\t\tflex: 1;\n\t\t\t}\n\n\t\t\t.text {\n\t\t\t\tbottom: 0;\n\t\t\t\tposition: absolute;\n\t\t\t\tpadding: ", ";\n\t\t\t\tborder-radius: var(--border-radius);\n\t\t\t\tbackground: #202020cc;\n\t\t\t\tcolor: var(--color-text-white);\n\t\t\t}\n\t\t}\n\t}\n\n\t", " {\n\t\tpadding: 0 1rem !important;\n\t\tpadding-bottom: 1rem !important;\n\n\t\t.items {\n\t\t\tgap: 1rem;\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n"]);

  HallsBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var HallsBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var _data$items$length, _data$items;

  var data = _ref.data,
      className = _ref.className;
  var itemsLength = (_data$items$length = data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.length) !== null && _data$items$length !== void 0 ? _data$items$length : 0;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [data.title && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "title",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
        data: data.title
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "items",
      children: data.items.map(function (item, key) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "image",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
              data: item.image
            })
          }, key), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "text",
            children: [item.name && /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
              data: item.name
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "Посадочных мест: " + item.capacity
            })]
          })]
        });
      })
    })]
  });
})(HallsBlock_templateObject(), function (p) {
  var _p$data$items$length, _p$data, _p$data$items;

  return ((_p$data$items$length = (_p$data = p.data) === null || _p$data === void 0 ? void 0 : (_p$data$items = _p$data.items) === null || _p$data$items === void 0 ? void 0 : _p$data$items.length) !== null && _p$data$items$length !== void 0 ? _p$data$items$length : 0) > 2 ? "0.5rem 1rem" : "1rem 2rem";
}, cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var HallBlock_HallsBlock = (HallsBlock);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/HrBlock/HrBlock.tsx



function HrBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 4rem 7rem !important;\n\n\t.line {\n\t\twidth: 80%;\n\t\theight: 1px;\n\t\tvisibility: visible;\n\t\tborder-bottom: 1px solid var(--color-text-dark);\n\t}\n"]);

  HrBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var HrBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "line"
    })
  });
})(HrBlock_templateObject());
/* harmony default export */ var HrBlock_HrBlock = (HrBlock);
;// CONCATENATED MODULE: ./core/PageData/Body/atoms/description/description.tsx


var Description = function Description(_ref) {
  var data = _ref.data,
      _ref$isOne = _ref.isOne,
      isOne = _ref$isOne === void 0 ? false : _ref$isOne;
  var isStr = typeof data == "string";
  var element = isStr ? /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
    children: data
  }) : isOne ? data.join(" ") : data.map(function (t, idx) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: t
    }, idx);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: element
  });
};

/* harmony default export */ var description_description = (Description);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/ImagesBlock/ImagesBlock.tsx




function ImagesBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tgap: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.images-block-title {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t}\n\n\t.images-block-description {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.images-block-images {\n\t\tgap: 2rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\n\t\t.images-block-image {\n\t\t\tflex: 1;\n\t\t}\n\t}\n"]);

  ImagesBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ImagesBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [(data === null || data === void 0 ? void 0 : data.heading) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "images-block-title",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
        data: data === null || data === void 0 ? void 0 : data.heading
      })
    }), (data === null || data === void 0 ? void 0 : data.description) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "images-block-description",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(description_description, {
        data: data === null || data === void 0 ? void 0 : data.description
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "images-block-images",
      children: data.images.map(function (image, idx) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "images-block-image",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
            data: image
          })
        }, idx);
      })
    })]
  });
})(ImagesBlock_templateObject());
/* harmony default export */ var ImagesBlock_ImagesBlock = (ImagesBlock);
// EXTERNAL MODULE: ./core/logic/api/ApiServices/ApiUrlCreatorService.tsx
var ApiUrlCreatorService = __webpack_require__(8502);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/InfoBlock/InfoBlock.tsx




function InfoBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tgap: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\n\t.info {\n\t\t", "\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: ", ";\n\t\tjustify-content: space-around;\n\n\t\t> div {\n\t\t\tflex: 1;\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\ttext-align: center;\n\t\t\talign-items: center;\n\t\t\tborder-radius: var(--border-radius);\n\t\t\tflex-direction: column;\n\t\t\t", "\n\n\t\t\t.title {\n\t\t\t\tfont-size: 20px;\n\t\t\t\tfont-weight: 800;\n\t\t\t}\n\n\t\t\t.contacts {\n\t\t\t\tgap: 1rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\t\t}\n\t}\n\n\t", " {\n\t\tpadding: 1rem 1rem !important;\n\n\t\t> .info {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tflex-direction: column !important;\n\t\t}\n\t}\n"]);

  InfoBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var InfoBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(link_link/* default */.Z, {
        data: {
          link: ApiUrlCreatorService/* default.value.getPageResource */.Z.value.getPageResource(data.menu).toString(),
          target: Target.self
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
          data: {
            title: "Посмотреть меню",
            level: 3
          }
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "info",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "title",
          children: "\u0410\u0434\u0440\u0435\u0441"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(address, {
          data: data.address
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "title",
          children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "contacts",
          children: Array.isArray(data.contacts) ? data.contacts.map(function (c, idx) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(phone, {
              data: c
            }, idx);
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(phone, {
            data: data.contacts
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "title",
          children: "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: data.workingMode
        })]
      })]
    })]
  });
})(InfoBlock_templateObject(), function (p) {
  return p.data.hidden ? "" : "gap: ".concat(p.data.directory == "row" ? "4" : "1", "rem;");
}, function (p) {
  var _p$data$directory;

  return (_p$data$directory = p.data.directory) !== null && _p$data$directory !== void 0 ? _p$data$directory : "row";
}, function (p) {
  return p.data.hidden ? "" : "\n\t\t\tpadding: 1rem;\n\t\t\tbackground: #3a3939;\n\t\t\tcolor: var(--color-text-white);\n\t\t\t--color-text-dark: var(--color-text-white);\n\t\t\t";
}, cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var InfoBlock_InfoBlock = (InfoBlock);
// EXTERNAL MODULE: ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js + 5 modules
var useMediaQuery = __webpack_require__(1529);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/InfoHallBlock/InfoHallsBlock.tsx




function InfoHallsBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tgap: 3rem;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: row;\n\n\t.info-block {\n\t\tflex: 0.8;\n\t}\n\t.halls-block {\n\t\tflex: 1;\n\t}\n\n\t", " {\n\t\tgap: 1rem;\n\t\tflex-direction: column;\n\t\tpadding: 1rem 1rem !important;\n\t}\n"]);

  InfoHallsBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var InfoHallsBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  var media = (0,useMediaQuery/* default */.Z)(cssUtils/* cssUtils.mobileWidth */.s.mobileWidth);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "info-block",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InfoBlock_InfoBlock, {
        data: data.info
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "halls-block",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HallBlock_HallsBlock, {
        data: data.halls
      })
    })]
  });
})(InfoHallsBlock_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var InfoHallBlock_InfoHallsBlock = (InfoHallsBlock);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2809);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/NewsBlock/NewsBlock.tsx






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NewsBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tpadding: 3rem 0 !important;\n\tbackground: var(--third-color);\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\t.dots {\n\t\tgap: 0.5rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\n\t\t.dot.active {\n\t\t\tbackground: var(--color-background-dark);\n\t\t}\n\t\t.dot {\n\t\t\tcursor: pointer;\n\t\t\tmin-width: 0.8rem;\n\t\t\tmin-height: 0.8rem;\n\t\t\tborder-radius: 1rem;\n\t\t\tpadding-top: 0.8rem;\n\t\t\tbackground: lch(0 0 0 / 0.5);\n\t\t}\n\t}\n\t.heading {\n\t\tdisplay: flex;\n\t\tpadding: 0rem 7rem;\n\t\tjustify-content: center;\n\t}\n\n\t.container {\n\t\tdisplay: flex;\n\t\tmargin: 1rem 0;\n\t\tmargin-top: 3rem;\n\t\tposition: relative;\n\t\tjustify-content: center;\n\n\t\t.arrow.right {\n\t\t\tright: 0;\n\t\t\talign-items: flex-start;\n\t\t}\n\t\t.arrow.left {\n\t\t\tleft: 0;\n\t\t\talign-items: flex-end;\n\t\t\tsvg {\n\t\t\t\ttransform: rotate(180deg);\n\t\t\t}\n\t\t}\n\t\t.not-scroll {\n\t\t\tz-index: 15;\n\t\t\tmin-width: 43rem;\n\t\t\tmin-height: 25rem;\n\t\t\tposition: absolute;\n\t\t}\n\n\t\t.arrow {\n\t\t\tz-index: 15;\n\t\t\tdisplay: flex;\n\t\t\tcursor: pointer;\n\t\t\tmin-width: 21.5rem;\n\t\t\tmin-height: 25rem;\n\t\t\tposition: absolute;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\t.items::-webkit-scrollbar {\n\t\t\theight: 0;\n\t\t\twidth: 0;\n\t\t}\n\n\t\t.items {\n\t\t\tgap: 5rem;\n\t\t\tdisplay: flex;\n\t\t\toverflow-x: auto;\n\t\t\toverflow-y: hidden;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-start;\n\t\t\tscroll-snap-type: x mandatory;\n\n\t\t\t> .item.disable {\n\t\t\t\t.bg2 {\n\t\t\t\t\tbackground: #f0ece680;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t> .item {\n\t\t\t\tscroll-snap-align: center;\n\t\t\t\tdisplay: flex;\n\t\t\t\tmin-width: 43rem;\n\t\t\t\tmin-height: 25rem;\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-size: cover !important;\n\n\t\t\t\tpadding: 1.5rem;\n\t\t\t\talign-items: flex-end;\n\t\t\t\tjustify-content: flex-start;\n\n\t\t\t\tposition: relative;\n\n\t\t\t\t.text {\n\t\t\t\t\tgap: 1rem;\n\t\t\t\t\tz-index: 10;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: flex-start;\n\t\t\t\t\tcolor: var(--color-text-white);\n\t\t\t\t}\n\n\t\t\t\t.image,\n\t\t\t\t.bg2,\n\t\t\t\t.bg {\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tbackground-position: center;\n\t\t\t\t\tcolor: var(--color-text-white);\n\t\t\t\t\tbackground-size: cover !important;\n\t\t\t\t\ttransition: all 1s ease 0s;\n\t\t\t\t}\n\t\t\t\t.bg2 {\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0);\n\t\t\t\t}\n\t\t\t\t.bg {\n\t\t\t\t\tbackground: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t", " {\n\t\tpadding: 1.5rem 0 !important;\n\n\t\t.container {\n\t\t\tmargin-top: 1.5rem;\n\n\t\t\t.not-scroll,\n\t\t\t.arrow {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.items {\n\t\t\t\tgap: 0;\n\n\t\t\t\t.item {\n\t\t\t\t\tmin-width: 100%;\n\t\t\t\t}\n\n\t\t\t\t> .item.disable {\n\t\t\t\t\t.bg2 {\n\t\t\t\t\t\tbackground: none;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.item.disable.left-right {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  NewsBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Item = function Item(_ref) {
  var title = _ref.title,
      image = _ref.image,
      description = _ref.description;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "image",
      style: {
        backgroundImage: "url(".concat(ApiUrlCreatorService/* default.value.getPageResource */.Z.value.getPageResource(image).toString(), ")")
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "bg"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "bg2"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "text",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
        data: title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(description_description, {
        data: description
      })]
    })]
  });
};

var NewsBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref2) {
  var data = _ref2.data,
      className = _ref2.className;

  var _useState = (0,react.useState)(0),
      index = _useState[0],
      setIndex = _useState[1];

  var ref = (0,react.useRef)(null);
  var media = (0,useMediaQuery/* default */.Z)(cssUtils/* cssUtils.mobileWidth */.s.mobileWidth);

  var updateData = function updateData(direction) {
    var newIndex = 0;

    if (direction == "left") {
      if (index == 0) newIndex = data.length - 1;else newIndex = index - 1;
    } else {
      if (index == data.length - 1) newIndex = 0;else newIndex = index + 1;
    }

    setIndex(newIndex);
  };

  var onScroll = function onScroll() {
    if (!media) return;
    var newIndex = 0;
    if (ref.current.scrollLeft == 0) newIndex = 0;else newIndex = Math.round(ref.current.scrollLeft / document.documentElement.clientWidth);
    setIndex(newIndex); // scroll(newIndex);
  };

  var scroll = function scroll(index) {
    var width = media ? index * document.documentElement.clientWidth : index * 688 + 688;
    ref.current.scrollTo({
      left: width,
      behavior: "smooth"
    });
  };

  (0,react.useEffect)(function () {
    if (media) return;
    scroll(index);
  }, [index]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "heading",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
        data: {
          title: "Новости",
          level: 2
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "arrow left",
        onClick: function onClick() {
          return updateData("left");
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
          role: "presentation",
          focusable: "false",
          viewBox: "0 0 11.3 21",
          xmlns: "http://www.w3.org/2000/svg",
          width: "15px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("polyline", {
            fill: "none",
            stroke: "#222",
            strokeLinecap: "butt",
            strokeWidth: "2",
            points: "0.5,0.5 10.5,10.5 0.5,20.5"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "not-scroll"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        ref: ref,
        className: "items",
        id: "news-items",
        onScroll: onScroll,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "item disable left-right",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Item, _objectSpread({}, data[data.length - 1]))
        }), data.map(function (item, key) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "item ".concat(key == index ? "active" : "disable"),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Item, _objectSpread({}, item))
          }, key);
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "item disable left-right",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Item, _objectSpread({}, data[0]))
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "arrow right",
        onClick: function onClick() {
          return updateData("right");
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
          role: "presentation",
          focusable: "false",
          viewBox: "0 0 11.3 21",
          xmlns: "http://www.w3.org/2000/svg",
          width: "15px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("polyline", {
            fill: "none",
            stroke: "#222",
            strokeLinecap: "butt",
            strokeWidth: "2",
            points: "0.5,0.5 10.5,10.5 0.5,20.5"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "dots",
      children: data.map(function (_, key) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "dot ".concat(key == index ? "active" : "disable"),
          onClick: function onClick() {
            setIndex(key);
            if (media) scroll(key);
          }
        }, key);
      })
    })]
  });
})(NewsBlock_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var NewsBlock_NewsBlock = (NewsBlock);
// EXTERNAL MODULE: ./core/PageData/Body/blocks/WelcomeBlock/WelcomeBlockIndexService.tsx
var WelcomeBlockIndexService = __webpack_require__(3796);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/RestBlock/RestBlock.tsx




function RestBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tpadding: 0 !important;\n\n\t> .items {\n\t\ttop: 7rem;\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t\tpadding: 2rem 3rem !important;\n\t\tpadding-bottom: 2rem !important;\n\n\t\t> .items-container {\n\t\t\tgap: 3rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t\tcolor: var(--color-text-white);\n\n\t\t\t> .item:hover {\n\t\t\t\topacity: 0.7;\n\t\t\t}\n\n\t\t\t> .item {\n\t\t\t\tcursor: pointer;\n\n\t\t\t\t.block-title h3 {\n\t\t\t\t\tpadding-bottom: 0.3rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t> .item.active {\n\t\t\t\t.line {\n\t\t\t\t\tborder-bottom: 2.6px solid var(--color-text-white);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t> .main-items {\n\t\t> .main-item {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t> .main-item.active {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t", " {\n\t\t> .items {\n\t\t\tpadding: 1rem 0rem !important;\n\n\t\t\t> .items-container {\n\t\t\t\tgap: 2rem;\n\t\t\t\toverflow-x: auto;\n\t\t\t\tpadding: 0 1rem !important;\n\t\t\t\tjustify-content: flex-start;\n\t\t\t\tscroll-padding-left: 1rem;\n\t\t\t\tscroll-snap-type: x mandatory;\n\n\t\t\t\t.item {\n\t\t\t\t\tscroll-snap-align: start;\n\t\t\t\t}\n\n\t\t\t\th3 {\n\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t> .items-container::-webkit-scrollbar {\n\t\t\t\theight: 0;\n\t\t\t\twidth: 0;\n\t\t\t}\n\t\t}\n\t}\n"]);

  RestBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







// import WelcomeBlockIndexService from "../WelcomeBlock/WelcomeBlockIndexService";
var RestBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;

  var _useState = (0,react.useState)(0),
      index = _useState[0],
      setIndex = _useState[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "items",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "items-container",
        children: data.items.map(function (item, key) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "item ".concat(index === key ? "active" : ""),
            onClick: function onClick() {
              setIndex(key);
              WelcomeBlockIndexService/* default.value */.Z.value = key;
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "text",
              children: (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "block-title",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
                  data: item === null || item === void 0 ? void 0 : item.title
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "line"
                })]
              })
            })
          }, key);
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "main-items",
      children: data.items.map(function (item, key) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "main-item ".concat(index === key ? "active" : ""),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Body_Body, {
            data: item.blocks
          })
        }, key);
      })
    })]
  });
})(RestBlock_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var RestBlock_RestBlock = (RestBlock);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/ScrollBlock/ScrollBlock.tsx




function ScrollBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tpadding: 0 !important;\n\n\tbackground-image: url(", ");\n\n\t> .bg {\n\t\tgap: 6rem;\n\t\tdisplay: flex;\n\t\tbackground: #fadfaba6;\n\t\tflex-direction: column;\n\t\tpadding: 6rem 4rem !important;\n\n\t\t> .item {\n\t\t\tdisplay: flex;\n\t\t\tpadding: 0 5rem;\n\t\t\tposition: relative;\n\n\t\t\t> .image {\n\t\t\t\twidth: 550px;\n\t\t\t}\n\n\t\t\t> .text {\n\t\t\t\tgap: 1rem;\n\t\t\t\twidth: 43%;\n\t\t\t\tpadding: 2rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\tposition: absolute;\n\t\t\t\tflex-direction: row;\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t\tborder-radius: var(--border-radius);\n\t\t\t\tbackground: var(--main-color);\n\t\t\t\tcolor: var(--color-text-white);\n\t\t\t\t--color-text-dark: var(--color-text-white);\n\n\t\t\t\t> .icon {\n\t\t\t\t\twidth: 9%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t> .text {\n\t\t\t\t\tgap: 1rem;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\n\t\t\t\t\t.link {\n\t\t\t\t\t\tgap: 1rem;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\talign-items: baseline;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t> .item.left {\n\t\t\tflex-direction: row;\n\n\t\t\t> .text {\n\t\t\t\ttop: -12%;\n\t\t\t\tleft: 43%;\n\t\t\t}\n\t\t}\n\t\t> .item.right {\n\t\t\tflex-direction: row-reverse;\n\t\t\t> .text {\n\t\t\t\tright: 43%;\n\t\t\t\tbottom: -12%;\n\t\t\t}\n\t\t}\n\t}\n"]);

  ScrollBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var getDirection = function getDirection(direction) {
  return direction !== null && direction !== void 0 ? direction : "left";
};

var getPositionLeft = function getPositionLeft(scrollPos) {
  if (scrollPos > 40) return 122;else return -12 + -25 + scrollPos * 4;
};

var getPositionRight = function getPositionRight(scrollPos) {
  if (scrollPos > 80) return 122;else return -12 + -60 + scrollPos * 4;
};

var ScrollBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;

  var _useState = (0,react.useState)(0),
      scrollPos = _useState[0],
      setScrollPos = _useState[1];

  var scroll = function scroll(e) {
    var element = e.target;
    setScrollPos(element.scrollTop / element.scrollHeight * 100);
  };

  (0,react.useEffect)(function () {
    if (!document) return;
    var page = document.getElementById("page");
    page.addEventListener("scroll", scroll);
    return function () {
      page.removeEventListener("scroll", scroll);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "bg",
      children: data.items.map(function (item, key) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "item ".concat(getDirection(item.direction)),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "image",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
              data: item.image
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "text",
            style: getDirection(item.direction) == "left" ? {
              top: "".concat(getPositionLeft(scrollPos), "px")
            } : {
              bottom: "".concat(getPositionRight(scrollPos), "px")
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "text",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
                data: item.title
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(description_description, {
                data: item.description
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(link_link/* default */.Z, {
                data: item.link,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "link",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                    width: "48",
                    height: "8",
                    viewBox: "0 0 48 8",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                      d: "M0 4L46 4",
                      style: {
                        stroke: "var(--color-text-dark)"
                      }
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                      d: "M39.9258 7.27251L46.5297 4.13626L39.9258 1",
                      strokeWidth: "0.8",
                      style: {
                        stroke: "var(--color-text-dark)"
                      }
                    })]
                  })]
                })
              })]
            })
          })]
        }, key);
      })
    })
  });
})(ScrollBlock_templateObject(), function (p) {
  return ApiUrlCreatorService/* default.value.getPageResource */.Z.value.getPageResource(p.data.bg).toString();
});
/* harmony default export */ var ScrollBlock_ScrollBlock = (ScrollBlock);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/SwithBlock/SwitchBlock.tsx




function SwitchBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 0 !important;\n\tpadding-bottom: 4rem !important;\n\tbackground: \u043C\u0444\u0435(--color-line);\n\n\t> .switch-items {\n\t\tleft: 0;\n\t\tposition: absolute;\n\t\tcolor: var(--color-text-white);\n\t\tpadding: 2rem 3rem !important;\n\t\tgap: 1rem;\n\t\ttop: 7rem;\n\t\twidth: 100%;\n\t\tpadding-bottom: 2rem !important;\n\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\t.switch-item:hover {\n\t\t\topacity: 0.7;\n\t\t}\n\n\t\t> div {\n\t\t\tgap: 2rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t.switch-item {\n\t\t\tgap: 1.3rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\talign-items: center;\n\t\t\tpadding-bottom: 0.2rem;\n\t\t\tjustify-content: center;\n\n\t\t\t> .image {\n\t\t\t\tmax-width: 15%;\n\t\t\t}\n\n\t\t\t> .heading {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.line {\n\t\t\t\twidth: 100%;\n\t\t\t\tbottom: -2.4px;\n\t\t\t\tposition: absolute;\n\t\t\t}\n\t\t}\n\n\t\t.switch-item.active {\n\t\t\t.line {\n\t\t\t\tborder-bottom: 2.6px solid var(--color-text-white);\n\t\t\t}\n\t\t}\n\n\t\t> .description {\n\t\t\ttext-align: center;\n\t\t\tpadding-top: 2rem;\n\t\t\tpadding-bottom: 2rem;\n\t\t\tjustify-content: center;\n\t\t\tfont-size: 1.5rem;\n\n\t\t\t> div {\n\t\t\t\twidth: 70%;\n\t\t\t}\n\t\t}\n\t}\n\n\t.main-items {\n\t\tposition: relative;\n\n\t\t> .heading {\n\t\t\tdisplay: flex;\n\t\t\tpadding-top: 2rem;\n\t\t\tflex-direction: row;\n\t\t\tpadding-bottom: 2rem;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\t> .description {\n\t\t\ttext-align: center;\n\t\t\tpadding-bottom: 2rem;\n\t\t}\n\n\t\t> .main-item {\n\t\t\t> .top,\n\t\t\t> .bottom {\n\t\t\t\topacity: 0;\n\t\t\t\tvisible: none;\n\t\t\t\tposition: absolute;\n\t\t\t\ttransition: opacity 1s ease 0s, visibility 1s ease 0s, position 1s ease 0s;\n\t\t\t}\n\n\t\t\t> .bottom {\n\t\t\t\ttop: 2rem;\n\t\t\t\tgap: 2rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: center;\n\n\t\t\t\t> .item {\n\t\t\t\t\tgap: 0rem;\n\t\t\t\t\twidth: 20%;\n\t\t\t\t\tdisplay: flex;\n\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tjustify-content: center;\n\n\t\t\t\t\t> .image {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 270px;\n\t\t\t\t\t\tbackground-position: center;\n\t\t\t\t\t\tbackground-size: cover !important;\n\t\t\t\t\t}\n\n\t\t\t\t\t> .text {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 60px;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\tbackground: var(--main-color);\n\t\t\t\t\t\tcolor: var(--color-text-white);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t> .main-item.active > .top,\n\t\t> .main-item.active > .bottom {\n\t\t\topacity: 1;\n\t\t\tposition: relative;\n\t\t}\n\t}\n\n\t", " {\n\t\tpadding: 1rem 1rem !important;\n\t\tpadding-bottom: 4rem !important;\n\n\t\t.switch-items {\n\t\t\tgap: 1rem;\n\t\t\tpadding: 1rem 1.5rem !important;\n\n\t\t\t.switch-item {\n\t\t\t\tgap: 0.3rem;\n\t\t\t\tflex-direction: column;\n\n\t\t\t\t.image {\n\t\t\t\t\tmax-width: 35%;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t> .description {\n\t\t\t\t> div {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.main-items {\n\t\t\t.main-item {\n\t\t\t\t.bottom {\n\t\t\t\t\t.item {\n\t\t\t\t\t\twidth: 45%;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t", " {\n\t\t.switch-items {\n\t\t\tgap: 3rem;\n\n\t\t\t> div {\n\t\t\t\tgap: 1rem;\n\t\t\t}\n\n\t\t\t> .description {\n\t\t\t\t> div {\n\t\t\t\t\tfont-size: 1.2rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.main-items {\n\t\t\t.main-item {\n\t\t\t\t.bottom {\n\t\t\t\t\tgap: 1rem;\n\n\t\t\t\t\t.item {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  SwitchBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var SwitchBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;

  var _useState = (0,react.useState)(0),
      index = _useState[0],
      setIndex = _useState[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "switch-items",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: data.map(function (item, key) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "switch-item ".concat(index === key ? "active" : ""),
            onClick: function onClick() {
              setIndex(key);
              WelcomeBlockIndexService/* default.value */.Z.value = key;
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "image",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
                data: item.icon
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "heading",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
                data: item.title
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "line"
            })]
          }, key);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "description",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(description_description, {
          data: data[index].description,
          isOne: (0,useMediaQuery/* default */.Z)(cssUtils/* cssUtils.mobileWidth */.s.mobileWidth)
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "main-items",
      children: data.map(function (item, key) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "main-item ".concat(index === key ? "active" : ""),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "bottom",
            children: item.items && item.items.map(function (item, key) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "image",
                  style: {
                    backgroundImage: "url(".concat(ApiUrlCreatorService/* default.value.getPageResource */.Z.value.getPageResource(item.image).toString(), ")")
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "text",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "heading",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
                      data: typeof item.title === "string" ? {
                        title: item.title,
                        level: 5
                      } : {
                        title: item.title.title,
                        level: 5
                      }
                    })
                  })
                })]
              }, key);
            })
          })
        }, key);
      })
    })]
  });
})(SwitchBlock_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile, cssUtils/* cssUtils.lessMobile */.s.lessMobile);
/* harmony default export */ var SwithBlock_SwitchBlock = (SwitchBlock);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/TitleBlock/TitleBlock.tsx




function TitleBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tgap: 1rem;\n\tdisplay: flex;\n\ttext-align: center;\n\talign-items: center;\n\tflex-direction: column;\n\tpadding-bottom: 0 !important;\n\n\t", " {\n\t\tpadding: 1rem 1rem !important;\n\t}\n"]);

  TitleBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var TitleBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [data.title && /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
      data: data.title
    }), data.description && /*#__PURE__*/(0,jsx_runtime.jsx)(description_description, {
      data: data.description,
      isOne: (0,useMediaQuery/* default */.Z)(cssUtils/* cssUtils.mobileWidth */.s.mobileWidth)
    })]
  });
})(TitleBlock_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var TitleBlock_TitleBlock = (TitleBlock);
;// CONCATENATED MODULE: ./core/PageData/Body/blocks/TwoBlock/TwoBlock.tsx




function TwoBlock_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tpadding: 5rem 2rem !important;\n\n\t> .item {\n\t\tgap: 2rem;\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\n\t\t.image {\n\t\t\twidth: 90%;\n\t\t}\n\n\t\t.heading {\n\t\t\tz-index: 100;\n\t\t\tpadding: 1rem 2rem;\n\t\t\tmargin-bottom: -4rem;\n\t\t\tcolor: var(--color-text-white);\n\t\t\tbackground: var(--main-color);\n\t\t}\n\n\t\t.text {\n\t\t\tgap: 1rem;\n\t\t\tdisplay: flex;\n\t\t\ttext-align: center;\n\t\t\talign-items: center;\n\t\t\tflex-direction: column;\n\n\t\t\tfont-size: 1.1rem;\n\t\t}\n\t}\n\n\t", " {\n\t\tgap: 2rem;\n\t\tflex-direction: column;\n\t\tpadding: 2rem !important;\n\n\t\t> .item {\n\t\t\tgap: 1rem;\n\n\t\t\t.text {\n\t\t\t\tgap: 0.5rem;\n\t\t\t}\n\n\t\t\t.heading {\n\t\t\t\tpadding: 0.5rem 1rem;\n\t\t\t\tmargin-bottom: -3.5rem;\n\t\t\t}\n\t\t}\n\t}\n"]);

  TwoBlock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var TwoBlock_getDirection = function getDirection(direction) {
  return direction !== null && direction !== void 0 ? direction : "left";
};

var TwoBlock = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  var media = (0,useMediaQuery/* default */.Z)(cssUtils/* cssUtils.mobileWidth */.s.mobileWidth);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    children: data.items.map(function (item, key) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "item ".concat(TwoBlock_getDirection(item.direction)),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "heading",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* default */.Z, {
            data: item.title
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "image",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
            data: item.image
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "description",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(description_description, {
              data: item.description,
              isOne: media
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(link_link/* default */.Z, {
            data: item.link,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "link",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
              })
            })
          })]
        })]
      }, key);
    })
  });
})(TwoBlock_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var TwoBlock_TwoBlock = (TwoBlock);
// EXTERNAL MODULE: ./core/PageData/Body/blocks/WelcomeBlock/WelcomeBlock.tsx
var WelcomeBlock = __webpack_require__(2768);
;// CONCATENATED MODULE: ./core/PageData/Body/Body.tsx



function Body_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\t> div {\n\t\tpadding: 1rem 7rem;\n\t}\n"]);

  Body_templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var Body = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  if (!data) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    id: "body",
    children: data.map(function (b, idx) {
      var block = b;
      if (block !== null && block !== void 0 && block.hr) return /*#__PURE__*/(0,jsx_runtime.jsx)(HrBlock_HrBlock, {
        data: block === null || block === void 0 ? void 0 : block.hr
      }, idx);
      if (block !== null && block !== void 0 && block.two) return /*#__PURE__*/(0,jsx_runtime.jsx)(TwoBlock_TwoBlock, {
        data: block === null || block === void 0 ? void 0 : block.two
      }, idx);
      if (block !== null && block !== void 0 && block.info) return /*#__PURE__*/(0,jsx_runtime.jsx)(InfoBlock_InfoBlock, {
        data: block === null || block === void 0 ? void 0 : block.info
      }, idx);
      if (block !== null && block !== void 0 && block.rest) return /*#__PURE__*/(0,jsx_runtime.jsx)(RestBlock_RestBlock, {
        data: block === null || block === void 0 ? void 0 : block.rest
      }, idx);
      if (block !== null && block !== void 0 && block.news) return /*#__PURE__*/(0,jsx_runtime.jsx)(NewsBlock_NewsBlock, {
        data: block === null || block === void 0 ? void 0 : block.news
      }, idx);
      if (block !== null && block !== void 0 && block.halls) return /*#__PURE__*/(0,jsx_runtime.jsx)(HallBlock_HallsBlock, {
        data: block === null || block === void 0 ? void 0 : block.halls
      }, idx);
      if (block !== null && block !== void 0 && block.title) return /*#__PURE__*/(0,jsx_runtime.jsx)(TitleBlock_TitleBlock, {
        data: block === null || block === void 0 ? void 0 : block.title
      }, idx);
      if (block !== null && block !== void 0 && block.images) return /*#__PURE__*/(0,jsx_runtime.jsx)(ImagesBlock_ImagesBlock, {
        data: block === null || block === void 0 ? void 0 : block.images
      }, idx);
      if (block !== null && block !== void 0 && block["switch"]) return /*#__PURE__*/(0,jsx_runtime.jsx)(SwithBlock_SwitchBlock, {
        data: block === null || block === void 0 ? void 0 : block["switch"]
      }, idx);
      if (block !== null && block !== void 0 && block.scroll) return /*#__PURE__*/(0,jsx_runtime.jsx)(ScrollBlock_ScrollBlock, {
        data: block === null || block === void 0 ? void 0 : block.scroll
      }, idx);
      if (block !== null && block !== void 0 && block.welcome) return /*#__PURE__*/(0,jsx_runtime.jsx)(WelcomeBlock/* default */.Z, {
        data: block === null || block === void 0 ? void 0 : block.welcome
      }, idx);
      if (block !== null && block !== void 0 && block.catalog) return /*#__PURE__*/(0,jsx_runtime.jsx)(CatalogBlock_CatalogBlock, {
        data: block === null || block === void 0 ? void 0 : block.catalog
      }, idx);
      if (block !== null && block !== void 0 && block.addresses) return /*#__PURE__*/(0,jsx_runtime.jsx)(AddressBlock_AddressBlock, {
        data: block === null || block === void 0 ? void 0 : block.addresses
      }, idx);
      if (block !== null && block !== void 0 && block.infoHalls) return /*#__PURE__*/(0,jsx_runtime.jsx)(InfoHallBlock_InfoHallsBlock, {
        data: block === null || block === void 0 ? void 0 : block.infoHalls
      }, idx);
    })
  });
})(Body_templateObject());
/* harmony default export */ var Body_Body = (Body);

/***/ })

}]);