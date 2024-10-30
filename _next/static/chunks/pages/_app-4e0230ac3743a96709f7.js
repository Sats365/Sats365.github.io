(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[888],{

/***/ 5042:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ memoize; }
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ 7955:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": function() { return /* binding */ ThemeContext; },
  "w": function() { return /* binding */ withEmotionCache; }
});

// UNUSED EXPORTS: C, E, _, a, b, c, h, u

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (false) { var isImportRule; }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (false) {}
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return Utility_charat(value, 0) ^ 45 ? (((((((length << 2) ^ Utility_charat(value, 0)) << 2) ^ Utility_charat(value, 1)) << 2) ^ Utility_charat(value, 2)) << 2) ^ Utility_charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function Utility_match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function Utility_replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function Utility_charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function Utility_substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function Utility_strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function Utility_sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function Utility_combine (array, callback) {
	return array.map(callback).join('')
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js


var line = 1
var column = 1
var Tokenizer_length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function Tokenizer_copy (root, props) {
	return Utility_assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function Tokenizer_char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? Utility_charat(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < Tokenizer_length ? Utility_charat(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return Utility_charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return Utility_substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, Tokenizer_length = Utility_strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function Tokenizer_tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js
var Enum_MS = '-ms-'
var Enum_MOZ = '-moz-'
var Enum_WEBKIT = '-webkit-'

var COMMENT = 'comm'
var Enum_RULESET = 'rule'
var Enum_DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var Enum_KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function Serializer_serialize (children, callback) {
	var output = ''
	var length = Utility_sizeof(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case Enum_DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case Enum_KEYFRAMES: return element.return = element.value + '{' + Serializer_serialize(element.children, callback) + '}'
		case Enum_RULESET: element.value = element.props.join(',')
	}

	return Utility_strlen(children = Serializer_serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = Utility_sizeof(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children)
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(element.props, function (value) {
							switch (match(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return serialize([copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return serialize([
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && Utility_charat(characters, length - 1) == 58) {
					if (indexof(characters += Utility_replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous)
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7)
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						Utility_append(comment(commenter(next(), caret()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = Utility_strlen(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = Utility_replace(characters, /\f/g, '')
						if (property > 0 && (Utility_strlen(characters) - length))
							Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(Utility_replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && Utility_charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + Utility_strlen(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += Utility_from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = (Utility_strlen(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next())

						atrule = peek(), offset = length = Utility_strlen(type = characters += identifier(caret())), character++
						break
					// -
					case 45:
						if (previous === 45 && Utility_strlen(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = Utility_sizeof(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = Utility_substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : Utility_replace(y, /&\f/g, rule[x])))
				props[k++] = z

	return node(value, root, parent, offset === 0 ? Enum_RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), Utility_substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, Enum_DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length)
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Utility_from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? element.parent.children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function emotion_cache_browser_esm_prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return Enum_WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Enum_WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Enum_WEBKIT + value + Enum_MOZ + value + Enum_MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return Enum_WEBKIT + value + Enum_MS + value + value;
    // order

    case 6165:
      return Enum_WEBKIT + value + Enum_MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return Enum_WEBKIT + value + Utility_replace(value, /(\w+).+(:[^]+)/, Enum_WEBKIT + 'box-$1$2' + Enum_MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return Enum_WEBKIT + value + Enum_MS + 'flex-item-' + Utility_replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return Enum_WEBKIT + value + Enum_MS + 'flex-line-pack' + Utility_replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return Enum_WEBKIT + 'box-' + Utility_replace(value, '-grow', '') + Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return Enum_WEBKIT + Utility_replace(value, /([^-])(transform)/g, '$1' + Enum_WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return Utility_replace(Utility_replace(Utility_replace(value, /(zoom-|grab)/, Enum_WEBKIT + '$1'), /(image-set)/, Enum_WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return Utility_replace(value, /(image-set\([^]*)/, Enum_WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return Utility_replace(Utility_replace(value, /(.+:)(flex-)?(.*)/, Enum_WEBKIT + 'box-pack:$3' + Enum_MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + Enum_WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Utility_replace(value, /(.+)-inline(.+)/, Enum_WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (Utility_strlen(value) - 1 - length > 6) switch (Utility_charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (Utility_charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return Utility_replace(value, /(.+:)(.+)-([^]+)/, '$1' + Enum_WEBKIT + '$2-$3' + '$1' + Enum_MOZ + (Utility_charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? emotion_cache_browser_esm_prefix(Utility_replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (Utility_charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (Utility_charat(value, Utility_strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return Utility_replace(value, ':', ':' + Enum_WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return Utility_replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + Enum_WEBKIT + (Utility_charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + Enum_WEBKIT + '$2$3' + '$1' + Enum_MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (Utility_charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return Enum_WEBKIT + value + Enum_MS + value + value;
  }

  return value;
}

var emotion_cache_browser_esm_prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case Enum_DECLARATION:
      element["return"] = emotion_cache_browser_esm_prefix(element.value, element.length);
      break;

    case Enum_KEYFRAMES:
      return Serializer_serialize([Tokenizer_copy(element, {
        value: Utility_replace(element.value, '@', '@' + Enum_WEBKIT)
      })], callback);

    case Enum_RULESET:
      if (element.length) return Utility_combine(element.props, function (value) {
        switch (Utility_match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(read-\w+)/, ':' + Enum_MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_WEBKIT + 'input-$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_MOZ + '$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, Enum_MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [emotion_cache_browser_esm_prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (false) {}

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (false) {}

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (false) {}

  {
    var currentSheet;
    var finalizingPlugins = [stringify,  false ? 0 : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return Serializer_serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (false) {}

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};



// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js + 2 modules
var emotion_serialize_browser_esm = __webpack_require__(1826);
// EXTERNAL MODULE: ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(7278);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js









var emotion_element_6a883da9_browser_esm_hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

if (false) {}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return useContext(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */(0,react.createContext)({});

if (false) {}

var useTheme = function useTheme() {
  return useContext(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (false) {}

  return _extends({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(/* unused pure expression or super */ null && (weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
})));
var ThemeProvider = function ThemeProvider(props) {
  var theme = useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = useContext(ThemeContext);
    return /*#__PURE__*/createElement(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_6a883da9_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, useContext(ThemeContext));

  if (false) { var labelFromStack; }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_6a883da9_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/createElement(WrappedComponent, newProps));
})));

if (false) {}




/***/ }),

/***/ 1826:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": function() { return /* binding */ serializeStyles; }
});

;// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var emotion_hash_esm = (murmur2);

;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ var emotion_unitless_esm = (unitlessKeys);

// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
var emotion_memoize_esm = __webpack_require__(5042);
;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,emotion_memoize_esm/* default */.Z)(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (emotion_unitless_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = emotion_hash_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ 1876:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ emotion_styled_browser_esm; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
var emotion_memoize_esm = __webpack_require__(5042);
;// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,emotion_memoize_esm/* default */.Z)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var emotion_is_prop_valid_esm = (isPropValid);

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js + 8 modules
var emotion_element_6a883da9_browser_esm = __webpack_require__(7955);
;// CONCATENATED MODULE: ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js + 2 modules
var emotion_serialize_browser_esm = __webpack_require__(1826);
// EXTERNAL MODULE: ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(7278);
;// CONCATENATED MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js








var testOmitPropsOnStringTag = emotion_is_prop_valid_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = (0,emotion_use_insertion_effect_with_fallbacks_browser_esm/* useInsertionEffectAlwaysWithSyncFallback */.L)(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  return null;
};

var createStyled = function createStyled(tag, options) {
  if (false) {}

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = (0,emotion_element_6a883da9_browser_esm.w)(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = (0,react.useContext)(emotion_element_6a883da9_browser_esm.T);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = (0,emotion_serialize_browser_esm/* serializeStyles */.O)(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      return /*#__PURE__*/(0,react.createElement)(react.Fragment, null, /*#__PURE__*/(0,react.createElement)(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/(0,react.createElement)(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ var emotion_styled_base_browser_esm = (createStyled);

;// CONCATENATED MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js









var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = emotion_styled_base_browser_esm.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ var emotion_styled_browser_esm = (newStyled);


/***/ }),

/***/ 7278:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ useInsertionEffectAlwaysWithSyncFallback; }
/* harmony export */ });
/* unused harmony export useInsertionEffectWithLayoutFallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);



var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useInsertion' + 'Effect'] ? /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;




/***/ }),

/***/ 1529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useMediaQuery; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js + 8 modules
var emotion_element_6a883da9_browser_esm = __webpack_require__(7955);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/useThemeWithoutDefault.js


function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = react.useContext(emotion_element_6a883da9_browser_esm.T);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
/* harmony default export */ var useThemeWithoutDefault = (useTheme);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/resolveProps.js
/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
function resolveProps(defaultProps, props) {
  const output = {
    ...props
  };
  Object.keys(defaultProps).forEach(propName => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = {
        ...defaultProps[propName],
        ...output[propName]
      };
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        // Reduce the iteration if the slot props is empty
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        // Reduce the iteration if the default slot props is empty
        output[propName] = slotProps;
      } else {
        output[propName] = {
          ...slotProps
        };
        Object.keys(defaultSlotProps).forEach(slotPropName => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/useEnhancedEffect.js

const useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ var esm_useEnhancedEffect = (useEnhancedEffect);
;// CONCATENATED MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js

/* harmony default export */ var utils_useEnhancedEffect = (esm_useEnhancedEffect);
;// CONCATENATED MODULE: ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js




/**
 * @deprecated Not used internally. Use `MediaQueryListEvent` from lib.dom.d.ts instead.
 */

/**
 * @deprecated Not used internally. Use `MediaQueryList` from lib.dom.d.ts instead.
 */

/**
 * @deprecated Not used internally. Use `(event: MediaQueryListEvent) => void` instead.
 */

function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const [match, setMatch] = react.useState(() => {
    if (noSsr && matchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }

    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches;
  });
  utils_useEnhancedEffect(() => {
    let active = true;
    if (!matchMedia) {
      return undefined;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    // TODO: Use `addEventListener` once support for Safari < 14 is dropped
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia]);
  return match;
}

// eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseSyncExternalStore = react_namespaceObject['useSyncExternalStore' + ''];
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const getDefaultSnapshot = react.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = react.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = react.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, notify => {
      // TODO: Use `addEventListener` once support for Safari < 14 is dropped
      mediaQueryList.addListener(notify);
      return () => {
        mediaQueryList.removeListener(notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match;
}
function useMediaQuery(queryInput, options = {}) {
  const theme = useThemeWithoutDefault();
  // Wait for jsdom to support the match media feature.
  // All the browsers MUI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.
  const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    ssrMatchMedia = null,
    noSsr = false
  } = getThemeProps({
    name: 'MuiUseMediaQuery',
    props: options,
    theme
  });
  if (false) {}
  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');

  // TODO: Drop `useMediaQueryOld` and use  `use-sync-external-store` shim in `useMediaQueryNew` once the package is stable
  const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== undefined ? useMediaQueryNew : useMediaQueryOld;
  const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
  if (false) {}
  return match;
}

/***/ }),

/***/ 3170:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2209);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7294);
/* harmony import */ var _logic_cssUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7394);




function _templateObject() {
  var data = (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(["\n\tfont-weight: 400;\n\tfont-family: \"Nunito\" !important;\n\t// font-family: \"Amatic SC\" !important;\n\t// font-family: \"Lobster\" !important;\n\t// font-family: \"PT Sans\" !important;\n\t// font-family: \"Roboto\" !important;\n\t// font-family: \"Ubuntu\" !important;\n\t// font-family: \"Open Sans\" !important;\n\t// font-family: \"Comfortaa\" !important;\n\t// font-family: \"Marck Script\" !important;\n\t// font-family: \"Bad Script\" !important;\n\tfont-family: \"Shantell Sans\" !important;\n\t// font-family: \"Pattaya\" !important;\n\n\t", "\n\n\th1 {\n\t\tfont-size: 4.7rem;\n\t\t// font-weight: 800;\n\t\tline-height: 100%;\n\t}\n\n\th2 {\n\t\tfont-size: 3rem;\n\t\t// font-weight: 800;\n\t\tline-height: 100%;\n\t}\n\n\th3 {\n\t\tfont-size: 2rem;\n\t\t// font-weight: 800;\n\t\tline-height: 2rem;\n\t}\n\n\th4 {\n\t\tfont-size: 1.5rem;\n\t\tword-spacing: 0.125rem;\n\t}\n\n\th5 {\n\t\tfont-size: 1rem;\n\t\tword-spacing: 0.125rem;\n\t}\n\n\t", " {\n\t\th1 {\n\t\t\tfont-size: 3rem;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: 2.5rem;\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: 1.2rem;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Heading = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (_ref) {
  var _data$level;

  var data = _ref.data,
      className = _ref.className;
  var isStr = typeof data === "string";
  var title = isStr ? data : data.title;
  var level = isStr ? 1 : (_data$level = data.level) !== null && _data$level !== void 0 ? _data$level : 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h" + level, {}, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: title
    }))
  });
})(_templateObject(), function (p) {
  var _p$data;

  return typeof p.data !== "string" ? (_p$data = p.data) !== null && _p$data !== void 0 && _p$data.isRedHeading ? "color: var(--main-color);" : "" : "";
}, _logic_cssUtils__WEBPACK_IMPORTED_MODULE_4__/* .cssUtils.mobile */ .s.mobile);
/* harmony default export */ __webpack_exports__["Z"] = (Heading);

/***/ }),

/***/ 9894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2209);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1876);
/* harmony import */ var _logic_api_ApiServices_ApiUrlCreatorService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8502);
/* harmony import */ var _heading_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3170);
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4841);




function _templateObject() {
  var data = (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(["\n\tdisplay: flex;\n\tposition: relative;\n\t", "\n\n\timg,\n\t.background {\n\t\tborder-radius: var(--border-radius);\n\t}\n\n\t.background {\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tdisplay: flex;\n\t\tposition: absolute;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\ttransition: all 0.6s ease 0s;\n\n\t\t.image-title {\n\t\t\tdisplay: flex;\n\t\t\tmin-width: 60%;\n\t\t\tmax-width: 80%;\n\t\t\tmin-height: 20%;\n\t\t\tmax-height: 20%;\n\t\t\tfont-size: 2.5rem;\n\t\t\tborder-radius: var(--border-radius);\n\t\t\talign-items: center;\n\t\t\tpadding: 0.2rem 2rem;\n\t\t\tbackground: #07070775;\n\t\t\tjustify-content: center;\n\t\t\tcolor: var(--color-text-white);\n\t\t\ttransition: all 0.6s ease 0s;\n\t\t}\n\t}\n\n\t:hover {\n\t\t.background {\n\t\t\t.image-title {\n\t\t\t\tmin-width: 100%;\n\t\t\t\tmax-width: 100%;\n\t\t\t\tmin-height: 100%;\n\t\t\t\tmax-height: 100%;\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Image = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className,
      onLoad = _ref.onLoad,
      _ref$isSiteImage = _ref.isSiteImage,
      isSiteImage = _ref$isSiteImage === void 0 ? false : _ref$isSiteImage;
  var isStr = typeof data === "string";
  var image = isStr ? data : data.image;
  var src = isSiteImage ? _logic_api_ApiServices_ApiUrlCreatorService__WEBPACK_IMPORTED_MODULE_3__/* .default.value.getSiteResource */ .Z.value.getSiteResource(image).toString() : _logic_api_ApiServices_ApiUrlCreatorService__WEBPACK_IMPORTED_MODULE_3__/* .default.value.getPageResource */ .Z.value.getPageResource(image).toString();

  if (isStr) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: className,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: src,
        onLoad: onLoad
      })
    });
  }

  var imageComponent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [data.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "background",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "image-title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heading_heading__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          data: data.title
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: src
    })]
  });

  if (data.link) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_link_link__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    data: data.link,
    children: imageComponent
  });
  return imageComponent;
})(_templateObject(), function (p) {
  return typeof p.data === "string" ? "" : p.data.link ? "cursor: pointer;" : "";
});
/* harmony default export */ __webpack_exports__["Z"] = (Image);

/***/ }),

/***/ 4841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2209);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1876);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);



function _templateObject() {
  var data = (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(["\n\tcolor: var(--color-text-dark);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Link = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (_ref) {
  var data = _ref.data,
      children = _ref.children,
      className = _ref.className;
  var isStr = typeof data === "string";
  var link = isStr ? data : data.link;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: link,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      className: className,
      target: isStr ? "_self" : data.target,
      children: children
    })
  });
})(_templateObject());
/* harmony default export */ __webpack_exports__["Z"] = (Link);

/***/ }),

/***/ 2768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2209);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1876);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1529);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7294);
/* harmony import */ var _logic_api_ApiServices_ApiUrlCreatorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8502);
/* harmony import */ var _logic_cssUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7394);
/* harmony import */ var _PageRefService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6674);
/* harmony import */ var _atoms_heading_heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3170);
/* harmony import */ var _WelcomeBlockIndexService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3796);




function _templateObject2() {
  var data = (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(["\n\tgap: 2.5rem;\n\tdisplay: flex;\n\toverflow: hidden;\n\tposition: relative;\n\tpadding: 0 !important;\n\tflex-direction: ", ";\n\t", "\n\t", "\n\t", "\n\n\n\t.bg {\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tbackground: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%);\n\t\tposition: absolute !important;\n\t}\n\n\t.heading {\n\t\tmargin: auto;\n\t\theight: 112px;\n\t\tdisplay: flex;\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t", "\n\n\tp {\n\t\tfont-size: 1.4rem;\n\t\ttext-align: center;\n\t}\n\n\t> .arrow {\n\t\tz-index: 100;\n\t\tdisplay: flex;\n\t\tpadding-top: 0rem;\n\t\tpadding-bottom: 2.5rem;\n\t\tjustify-content: center;\n\t\tanimation: t-arrow-bottom 1.7s infinite ease;\n\n\t\t> svg {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t> svg:hover {\n\t\t\topacity: 0.8;\n\t\t}\n\t}\n\n\t@keyframes t-arrow-bottom {\n\t\t0%,\n\t\tto {\n\t\t\t-moz-transform: translateY(0);\n\t\t\t-ms-transform: translateY(0);\n\t\t\t-webkit-transform: translateY(0);\n\t\t\t-o-transform: translateY(0);\n\t\t\ttransform: translateY(0);\n\t\t}\n\n\t\t50%,\n\t\t55% {\n\t\t\t-moz-transform: translateY(-7px);\n\t\t\t-ms-transform: translateY(-7px);\n\t\t\t-webkit-transform: translateY(-7px);\n\t\t\t-o-transform: translateY(-7px);\n\t\t\ttransform: translateY(-7px);\n\t\t}\n\t}\n\n\t", " {\n\t\theight: ", ";\n\n\t\t.heading {\n\t\t\th1 {\n\t\t\t\tline-height: 115%;\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(["\n\topacity: 0;\n\tvisibility: hidden;\n\tposition: absolute;\n\ttransform: scale(1.1);\n\n\t", "\n\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tdisplay: flex;\n\toverflow: hidden;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-position: center;\n\tbackground-size: cover !important;\n\tbackground-image: url(", ");\n\ttransition: opacity 2s ease 0s, visibility 2s ease 0s, position 2s ease 0s, transform 5s ease 0s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Bg = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "bg"
    })
  });
})(_templateObject(), function (p) {
  return p.isVisible ? "\n\topacity: 1 !important;\n\tvisibility: visible !important;\n\tposition: absolute !important;\n\ttransform: scale(1); !important;" : "";
}, function (p) {
  return _logic_api_ApiServices_ApiUrlCreatorService__WEBPACK_IMPORTED_MODULE_4__/* .default.value.getPageResource */ .Z.value.getPageResource(p.image).toString();
});
var WelcomeBlock = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (_ref2) {
  var data = _ref2.data,
      className = _ref2.className;
  var media = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(_logic_cssUtils__WEBPACK_IMPORTED_MODULE_5__/* .cssUtils.mobileWidth */ .s.mobileWidth);
  var ref = _PageRefService__WEBPACK_IMPORTED_MODULE_6__/* .default.value */ .Z.value;
  var count = _WelcomeBlockIndexService__WEBPACK_IMPORTED_MODULE_8__/* .default.value */ .Z.value;
  var isHalf = media ? data.isMobileHalf : data.isHalf;

  var func = function func() {
    var newCount;
    if (count == -1) newCount = 0;else if (data.background && count < data.background.length - 1) newCount = count + 1;else newCount = 0;
    _WelcomeBlockIndexService__WEBPACK_IMPORTED_MODULE_8__/* .default.value */ .Z.value = newCount;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!data.autoSwitch) return;
    var index = setInterval(func, 5000);
    return function () {
      return clearInterval(index);
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [data.heading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "heading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_heading_heading__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        data: data.heading
      })
    }), data.background && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "bg",
      children: data.background.map(function (image, key) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Bg, {
          image: image.image,
          isTop: data.isTop,
          isVisible: key == count,
          heading: data.heading
        }, key);
      })
    }), data.background && !isHalf && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "arrow",
      onClick: function onClick() {
        ref.current.scrollTo({
          top: document.documentElement.clientHeight,
          behavior: "smooth"
        });
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: "38.417px",
        height: "18.592px",
        viewBox: "0 0 38.417 18.592",
        fill: "#ffffff",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          strokeWidth: "0.8",
          style: {
            stroke: "#ffffff"
          },
          d: "M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"
        })
      })
    })]
  });
})(_templateObject2(), function (p) {
  return p.data.heading ? "column" : "column-reverse";
}, function (p) {
  return p.data.isTop ? "margin-top: -7rem;" : "";
}, function (p) {
  return p.data.background ? "height: calc(100vh - 208px);" : "padding-bottom: 2rem !important;";
}, function (p) {
  return p.data.background && p.data.isTop ? p.data.isHalf ? "height: 60vh;" : "height: 100vh;" : "";
}, function (p) {
  return p.data.background ? ".heading {\n\t\tz-index: 100;\n\t\tpadding: 2rem;\n\t\tpadding-top: 5rem;\n\t\tcolor: var(--color-text-white);\n\t\tborder-radius: var(--border-radius);\n\t}" : "padding-bottom: 2rem !important;";
}, _logic_cssUtils__WEBPACK_IMPORTED_MODULE_5__/* .cssUtils.mobile */ .s.mobile, function (p) {
  return p.data.isMobileHalf ? "45vh" : "100vh";
});
/* harmony default export */ __webpack_exports__["Z"] = (WelcomeBlock);

/***/ }),

/***/ 3796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ WelcomeBlockIndexService; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8216);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);




var WelcomeBlockIndexContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(0);

var _setCount;

var WelcomeBlockIndexService = /*#__PURE__*/function () {
  function WelcomeBlockIndexService() {
    (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, WelcomeBlockIndexService);
  }

  (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(WelcomeBlockIndexService, null, [{
    key: "Provider",
    value: function Provider(_ref) {
      var children = _ref.children,
          pagePath = _ref.pagePath;

      var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1),
          count = _useState[0],
          setCount = _useState[1];

      _setCount = setCount;
      (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        return setCount(0);
      }, [pagePath]);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WelcomeBlockIndexContext.Provider, {
        value: count,
        children: children
      });
    }
  }, {
    key: "value",
    get: function get() {
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WelcomeBlockIndexContext);
    },
    set: function set(value) {
      _setCount(value);
    }
  }]);

  return WelcomeBlockIndexService;
}();



/***/ }),

/***/ 6674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8216);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);




var PageRefContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);

var PageRefService = /*#__PURE__*/function () {
  function PageRefService() {
    (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, PageRefService);
  }

  (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(PageRefService, null, [{
    key: "Provider",
    value: function Provider(_ref) {
      var children = _ref.children;
      var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PageRefContext.Provider, {
        value: ref,
        children: children
      });
    }
  }, {
    key: "value",
    get: function get() {
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PageRefContext);
    }
  }]);

  return PageRefService;
}();

/* harmony default export */ __webpack_exports__["Z"] = (PageRefService);

/***/ }),

/***/ 8502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ApiUrlCreatorService; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8216);
/* harmony import */ var _Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);




var ApiUrlCreatorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);

var ApiUrlCreatorService = /*#__PURE__*/function () {
  function ApiUrlCreatorService() {
    (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, ApiUrlCreatorService);
  }

  (0,_Users_syargu_Desktop_WorkProjects_publiccatering_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(ApiUrlCreatorService, null, [{
    key: "Provider",
    value: function Provider(_ref) {
      var children = _ref.children,
          value = _ref.value;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ApiUrlCreatorContext.Provider, {
        value: value,
        children: children
      });
    }
  }, {
    key: "value",
    get: function get() {
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ApiUrlCreatorContext);
    }
  }]);

  return ApiUrlCreatorService;
}();



/***/ }),

/***/ 7394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ cssUtils; }
/* harmony export */ });
var mediumest = "(max-width: 71rem)";
var medium = "(max-width: 62rem)";
var mobile = "(max-width: 40rem)";
var cssUtils = {
  tablet: "@media only screen and (max-width: 69rem)",
  lessTablet: "@media only screen and (max-width: 48rem)",
  mobile: "@media only screen and ".concat(mobile),
  lessMobile: "@media only screen and (max-width: 26rem)",
  mobileWidth: mobile
};

/***/ }),

/***/ 2167:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _slicedToArray = __webpack_require__(3848);

__webpack_unused_export__ = ({
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(7294));

var _router = __webpack_require__(1063);

var _router1 = __webpack_require__(4651);

var _useIntersection = __webpack_require__(7426);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (false) {}
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }

  var p = props.prefetch !== false;
  var router = (0, _router1).useRouter();

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _resolveHref = (0, _router).resolveHref(router, props.href, true),
        _resolveHref2 = _slicedToArray(_resolveHref, 2),
        resolvedHref = _resolveHref2[0],
        resolvedAs = _resolveHref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (false) {} else {
    child = _react["default"].Children.only(children);
  }

  var childRef = child && typeof child === 'object' && child.ref;

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 2),
      setIntersectionRef = _useIntersection3[0],
      isVisible = _useIntersection3[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react["default"].useEffect(function () {
    var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ 7426:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(3848);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(7294);

var _requestIdleCallback = __webpack_require__(3447);

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react).useRef();

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var setRef = (0, _react).useCallback(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

/***/ }),

/***/ 7760:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2809);
// EXTERNAL MODULE: ./public/styles/global.css
var global = __webpack_require__(7959);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(2209);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 4 modules
var emotion_styled_browser_esm = __webpack_require__(1876);
// EXTERNAL MODULE: ./core/logic/cssUtils.ts
var cssUtils = __webpack_require__(7394);
// EXTERNAL MODULE: ./core/PageData/Body/atoms/image/image.tsx
var image_image = __webpack_require__(9894);
// EXTERNAL MODULE: ./core/PageData/Body/atoms/link/link.tsx
var link_link = __webpack_require__(4841);
;// CONCATENATED MODULE: ./core/PageData/Footer/components/Footer.tsx




function _templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tgap: 0.8rem;\n\tdisplay: flex;\n\tpadding: 1.5rem 7rem;\n\tflex-direction: column;\n\tcolor: var(--color-text-white);\n\tbackground: var(--color-background-dark);\n\n\t> div {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\n\t\t.links,\n\t\t.logos {\n\t\t\tgap: 1rem;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\t.logo {\n\t\t\t\twidth: 2rem;\n\t\t\t}\n\t\t}\n\n\t\t.text {\n\t\t\twidth: 7rem;\n\t\t\tfont-size: 0.9rem;\n\t\t\ttext-align: center;\n\t\t\tline-height: 16px;\n\t\t}\n\n\t\t.links {\n\t\t\t> a {\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcolor: var(--color-text-white);\n\t\t\t}\n\n\t\t\t> a:hover {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}\n\t\t}\n\t}\n\n\t", " {\n\t\tpadding: 0.5rem 1rem;\n\t}\n\n\t", " {\n\t\tgap: 0.5rem;\n\t\tpadding: 1rem 1rem;\n\n\t\t> div {\n\t\t\tgap: 0.5rem;\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Footer = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      className = _ref.className;
  if (!data) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "logos",
        children: data.logos.map(function (logo, key) {
          return typeof logo == "string" ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "text",
            children: logo
          }, key) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
              data: logo,
              isSiteImage: true
            })
          }, key);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "links",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(link_link/* default */.Z, {
          data: data.vkLink,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
            data: "./vk-white.png",
            isSiteImage: true
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "mailto:".concat(data.mail),
          children: data.mail
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "\xA9 ".concat(2012, "-", new Date().getFullYear(), " ").concat(data.copyright)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "links",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "tel:".concat(data.phone),
          children: data.phone
        })
      })]
    })]
  });
})(_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile, cssUtils/* cssUtils.lessMobile */.s.lessMobile);
/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js + 5 modules
var useMediaQuery = __webpack_require__(1529);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(2167);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./core/PageData/Body/blocks/WelcomeBlock/WelcomeBlockIndexService.tsx
var WelcomeBlockIndexService = __webpack_require__(3796);
// EXTERNAL MODULE: ./core/PageData/PageRefService.tsx
var PageRefService = __webpack_require__(6674);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5997);
;// CONCATENATED MODULE: ./core/logic/api/ApiServices/Types/Url.ts




var Url = /*#__PURE__*/function () {
  function Url(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,classCallCheck/* default */.Z)(this, Url);

    (0,defineProperty/* default */.Z)(this, "_url", void 0);

    (0,defineProperty/* default */.Z)(this, "_params", void 0);

    this._url = url;
    this._params = params;
  }

  (0,createClass/* default */.Z)(Url, [{
    key: "toString",
    value: function toString() {
      var _this = this;

      return this._url + (Object.keys(this._params).length ? "?" : "") + Object.keys(this._params).map(function (name) {
        return _this._params[name] ? name + "=".concat(encodeURIComponent(_this._params[name])) : "";
      }).filter(function (e) {
        return e != "";
      }).join("&");
    }
  }]);

  return Url;
}();

/* harmony default export */ var Types_Url = (Url);
;// CONCATENATED MODULE: ./core/logic/api/ApiServices/ApiUrlCreator.ts





var ApiUrlCreator = /*#__PURE__*/function () {
  function ApiUrlCreator(pagePath) {
    (0,classCallCheck/* default */.Z)(this, ApiUrlCreator);

    (0,defineProperty/* default */.Z)(this, "_pagePath", void 0);

    this._pagePath = pagePath;
  }

  (0,createClass/* default */.Z)(ApiUrlCreator, [{
    key: "getPageResource",
    value: function getPageResource(path) {
      return this._createUrl("/api/getPageResource", {
        path: path,
        page: this._pagePath
      });
    }
  }, {
    key: "getSiteResource",
    value: function getSiteResource(path) {
      return this._createUrl("/api/getSiteResource", {
        path: path
      });
    }
  }, {
    key: "_createUrl",
    value: function _createUrl(baseUrl) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Types_Url(baseUrl, params);
    }
  }]);

  return ApiUrlCreator;
}();


// EXTERNAL MODULE: ./core/logic/api/ApiServices/ApiUrlCreatorService.tsx
var ApiUrlCreatorService = __webpack_require__(8502);
;// CONCATENATED MODULE: ./core/components/ContextProviders.tsx






var PagePathContext = /*#__PURE__*/(0,react.createContext)(null);
function ContextProviders(_ref) {
  var data = _ref.data,
      children = _ref.children;
  var apiUrlCreator = new ApiUrlCreator(data.pagePath);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PagePathContext.Provider, {
    value: data.pagePath,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PageRefService/* default.Provider */.Z.Provider, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(WelcomeBlockIndexService/* default.Provider */.Z.Provider, {
        pagePath: data.pagePath,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ApiUrlCreatorService/* default.Provider */.Z.Provider, {
          value: apiUrlCreator,
          children: children
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./core/PageData/Body/blocks/WelcomeBlock/WelcomeBlock.tsx
var WelcomeBlock = __webpack_require__(2768);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./core/PageData/Header/components/HeaderItem.tsx




function HeaderItem_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\n\t> a {\n\t\tdisplay: flex;\n\t\tcolor: inherit;\n\t\tcursor: pointer;\n\t\ttext-decoration: none;\n\t\tflex-direction: column;\n\t\tcolor: var(--color-text-dark);\n\n\t\t.line {\n\t\t\twidth: 100%;\n\t\t\theight: 2px;\n\t\t\tmargin-top: -0.1rem;\n\t\t\t", "\n\t\t}\n\n\t\t:hover {\n\t\t\topacity: 0.6;\n\n\t\t\t.line {\n\t\t\t\topacity: 0.6;\n\t\t\t}\n\t\t}\n\t}\n\n\t> span {\n\t\tcursor: pointer;\n\t}\n\n\t:hover {\n\t\t.modal {\n\t\t\topacity: 1 !important;\n\t\t\tvisibility: visible !important;\n\t\t}\n\t}\n\n\t.modal {\n\t\topacity: 0;\n\t\ttop: 2.2rem;\n\t\tz-index: 10;\n\t\tvisibility: hidden;\n\t\tborder-radius: var(--border-radius);\n\t\tposition: absolute;\n\t\tpadding: 0.5rem 1rem;\n\t\tbox-shadow: 0px 0px 12px -5px rgb(0 0 0);\n\t\tbackground: var(--color-background-white);\n\t\ttransition: opacity 0.6s ease 0s, visibility 0.6s ease 0s, transform 0.5s ease 0s;\n\n\t\ta {\n\t\t\tfont-size: 1.1rem;\n\t\t\tcolor: var(--color-text-dark);\n\t\t}\n\t}\n\n\t", " {\n\t\t.line {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n"]);

  HeaderItem_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var HeaderItem = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      onClick = _ref.onClick,
      className = _ref.className;
  if (!data) return null;
  if (data.items) return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(next_link.default, {
      href: data.link,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
        children: [data.title, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "line"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "modal",
      children: data.items.map(function (item, idx) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "modal-item",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HeaderItem, {
            data: item
          }, idx)
        }, idx);
      })
    })]
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(next_link.default, {
      href: data.link,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
        children: [data.title, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "line"
        })]
      })
    })
  });
})(HeaderItem_templateObject(), function (p) {
  return p.isActive ? "background: var(--color-text-dark);" : "";
}, cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var components_HeaderItem = (HeaderItem);
;// CONCATENATED MODULE: ./core/PageData/Header/components/Header.tsx





function Header_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\tgap: 2.5rem;\n\tz-index: 1000;\n\twidth: 100%;\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n\tpadding: 1.5rem 5rem;\n\tjustify-content: space-between;\n\n\t> .left {\n\t\tgap: 2.5rem;\n\t\tdisplay: flex;\n\n\t\t.title-logo {\n\t\t\tgap: 1rem;\n\t\t\tdisplay: flex;\n\t\t\tcursor: pointer;\n\t\t\talign-items: center;\n\n\t\t\t.title {\n\t\t\t\tfont-size: 3rem;\n\t\t\t}\n\n\t\t\t.logo {\n\t\t\t\tmax-width: 4rem;\n\t\t\t}\n\t\t}\n\n\t\t.title-logo:hover {\n\t\t\topacity: 0.8;\n\t\t}\n\n\t\t.items {\n\t\t\tgap: 2.5rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: center;\n\t\t\tfont-size: 1.5rem;\n\t\t\tfont-weight: bold;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t.items.white {\n\t\t\t--color-text-dark: var(--color-text-white);\n\t\t}\n\t}\n\n\t> .button {\n\t\tgap: 0.5rem;\n\t\tdisplay: flex;\n\t\talign-items: baseline;\n\t\talign-items: center;\n\t\tborder-radius: 3px;\n\t\tpadding: 0.5rem 1rem;\n\t\tbackground: #202020cc;\n\t\tcolor: var(--color-text-white);\n\n\t\t> svg {\n\t\t\twidth: 1rem;\n\t\t\theight: 14px;\n\t\t}\n\t}\n\n\t", " {\n\t\tgap: 1.5rem;\n\t\tpadding: 1.5rem 1rem;\n\n\t\t> .left {\n\t\t\twidth: 100%;\n\t\t\tz-index: 10000;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\n\t\t\t.sociavore-icon {\n\t\t\t\tcursor: pointer;\n\t\t\t\tstroke-width: 2;\n\t\t\t\tstroke: currentColor;\n\t\t\t\tcolor: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t.sociavore-icon {\n\t\t\t\tright: 1rem;\n\t\t\t\twidth: 2.5rem;\n\t\t\t\theight: 2.5rem;\n\t\t\t\tposition: absolute;\n\t\t\t\tcolor: var(--color-text-white);\n\t\t\t\tcolor: var(--color-text-white);\n\t\t\t}\n\n\t\t\t.open-icon.hidden {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.open-icon {\n\t\t\t\twidth: 2.5rem;\n\t\t\t\theight: 2.5rem;\n\t\t\t\tcolor: var(--color-text-white);\n\t\t\t}\n\n\t\t\t.left-menu.hidden {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.left-menu {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\theight: 100vh;\n\t\t\t\tdisplay: flex;\n\t\t\t\tz-index: 10000;\n\t\t\t\tposition: fixed;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: flex-start;\n\n\t\t\t\t.right {\n\t\t\t\t\tflex: 1;\n\t\t\t\t\twidth: 40%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground: #00000070;\n\t\t\t\t}\n\n\t\t\t\t.items {\n\t\t\t\t\tgap: 0.5rem;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tpadding: 1.5rem;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: flex-start;\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  Header_templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Header = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var data = _ref.data,
      welcome = _ref.welcome,
      className = _ref.className;
  if (!data) return null;

  var _useState = (0,react.useState)(0),
      activeId = _useState[0],
      setActiveId = _useState[1];

  var pagePath = (0,react.useContext)(PagePathContext);
  var media = (0,useMediaQuery/* default */.Z)(cssUtils/* cssUtils.mobileWidth */.s.mobileWidth);
  (0,react.useEffect)(function () {
    data.items.forEach(function (item, idx) {
      if (pagePath == "index") setActiveId(0);else if (item.link == "/" + pagePath) setActiveId(idx);
    });
  }, [pagePath]);

  var _useState2 = (0,react.useState)(false),
      isOpen = _useState2[0],
      setIsOpn = _useState2[1];

  var close = function close() {
    return setIsOpn(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("header", {
      className: className,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "left",
        children: [data.logo && /*#__PURE__*/(0,jsx_runtime.jsx)(client_link.default, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "title-logo",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "logo",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(image_image/* default */.Z, {
                data: data.logo,
                isSiteImage: true
              })
            })
          })
        }), media ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            className: "sociavore-icon open-icon ".concat(isOpen ? "hidden" : ""),
            focusable: "false",
            "aria-hidden": "true",
            onClick: function onClick() {
              return setIsOpn(true);
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("line", {
              x1: "3",
              y1: "12",
              x2: "21",
              y2: "12"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "left-menu ".concat(isOpen ? "" : "hidden"),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "right"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "items ".concat(welcome !== null && welcome !== void 0 && welcome.isWhite ? "white" : ""),
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                viewBox: "0 0 24 24",
                className: "sociavore-icon",
                focusable: "false",
                "aria-hidden": "true",
                onClick: close,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18"
                })]
              }), data.items.map(function (item, idx) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(components_HeaderItem, {
                  data: item,
                  isActive: idx == activeId,
                  onClick: close
                }, idx);
              })]
            })]
          })]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "items ".concat(welcome !== null && welcome !== void 0 && welcome.isWhite ? "white" : ""),
          children: data.items.map(function (item, idx) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(components_HeaderItem, {
              data: item,
              isActive: idx == activeId
            }, idx);
          })
        })]
      })
    }), welcome && /*#__PURE__*/(0,jsx_runtime.jsx)(WelcomeBlock/* default */.Z, {
      data: welcome
    })]
  });
})(Header_templateObject(), cssUtils/* cssUtils.mobile */.s.mobile);
/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./core/PageData/PageComponent.tsx




function PageComponent_templateObject() {
  var data = (0,taggedTemplateLiteral/* default */.Z)(["\n\theight: 100%;\n\tdisplay: flex;\n\toverflow: auto;\n\tposition: relative;\n\tflex-direction: column;\n\n\t.body {\n\t\tflex: 1;\n\t}\n"]);

  PageComponent_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PageComponent = (0,emotion_styled_browser_esm/* default */.Z)(function (_ref) {
  var header = _ref.header,
      body = _ref.body,
      footer = _ref.footer,
      className = _ref.className;
  var pageRef = PageRefService/* default.value */.Z.value;
  var pagePath = (0,react.useContext)(PagePathContext);
  (0,react.useEffect)(function () {
    if (!(pageRef !== null && pageRef !== void 0 && pageRef.current)) return;
    pageRef.current.scrollTo({
      top: 0
    });
  }, [pagePath]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    id: "page",
    ref: pageRef,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "header",
      id: "header",
      children: header
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "body",
      children: body
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "footer",
      children: footer
    })]
  });
})(PageComponent_templateObject());
/* harmony default export */ var PageData_PageComponent = (PageComponent);
;// CONCATENATED MODULE: ./pages/_app.tsx





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function App(_ref) {
  var _pageProps$data, _pageProps$data2, _pageProps$data3;

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  if (Component.error) return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, _objectSpread({}, pageProps));
  var apiUrlCreator = new ApiUrlCreator(pageProps.data.pagePath);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("title", {
        children: pageProps.data.body.meta.title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        name: "description",
        content: pageProps.data.body.meta.description
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        property: "og:title",
        content: pageProps.data.body.meta.title
      }), pageProps.data.body.meta.keywords && /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        name: "keywords",
        content: pageProps.data.body.meta.keywords
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        property: "og:description",
        content: pageProps.data.body.meta.description
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        property: "og:image",
        content: "http://obmorgaushi.ru" + apiUrlCreator.getPageResource(pageProps.data.body.meta.image).toString()
      }), pageProps.data.body.meta.url && /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        property: "og:title",
        content: pageProps.data.body.meta.url
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        type: "image/x-icon",
        rel: "shortcut icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Amatic+SC:100,200,300,400,500,600,700"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lobster:100,200,300,400,500,600,700"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=PT+Sans:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Ubuntu:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Comfortaa:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Marck+Script:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bad+Script:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Shantell+Sans:100,200,300,400,500,600,700,800,900"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Pattaya:100,200,300,400,500,600,700,800,900"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ContextProviders, {
      data: pageProps === null || pageProps === void 0 ? void 0 : pageProps.data,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PageData_PageComponent, {
        header: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Header, {
          data: pageProps === null || pageProps === void 0 ? void 0 : (_pageProps$data = pageProps.data) === null || _pageProps$data === void 0 ? void 0 : _pageProps$data.header,
          welcome: pageProps === null || pageProps === void 0 ? void 0 : (_pageProps$data2 = pageProps.data) === null || _pageProps$data2 === void 0 ? void 0 : _pageProps$data2.body.header
        }),
        body: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, _objectSpread({}, pageProps)),
        footer: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Footer, {
          data: pageProps === null || pageProps === void 0 ? void 0 : (_pageProps$data3 = pageProps.data) === null || _pageProps$data3 === void 0 ? void 0 : _pageProps$data3.footer
        })
      })
    })]
  });
}

/***/ }),

/***/ 6363:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(7760);
      }
    ]);
  

/***/ }),

/***/ 7959:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(639)


/***/ }),

/***/ 1664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(2167)


/***/ }),

/***/ 8216:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 5997:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 2809:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 2209:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,179], function() { return __webpack_exec__(6363), __webpack_exec__(4651); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);