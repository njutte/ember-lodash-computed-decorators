import macroAlias from 'ember-computed-decorators/macro-alias';
import * as computed from 'ember-lodash-computed';

// `is` methods
export var isArguments = macroAlias(computed.isArguments);
export var isArray = macroAlias(computed.isArray);
export var isBoolean = macroAlias(computed.isBoolean);
export var isDate = macroAlias(computed.isDate);
export var isElement = macroAlias(computed.isElement);
export var isEmpty = macroAlias(computed.isEmpty);
export var isFunction = macroAlias(computed.isFunction);
/* jshint ignore:start */
export var isNaN = macroAlias(computed.isNaN);
/* jshint ignore:end */
export var isNative = macroAlias(computed.isNative);
export var isNull = macroAlias(computed.isNull);
export var isNumber = macroAlias(computed.isNumber);
export var isObject = macroAlias(computed.isObject);
export var isPlainObject = macroAlias(computed.isPlainObject);
export var isRegExp = macroAlias(computed.isRegExp);
export var isString = macroAlias(computed.isString);
export var isTypedArray = macroAlias(computed.isTypedArray);
export var isUndefined = macroAlias(computed.isUndefined);

// others
export var includes = macroAlias(computed.includes);
