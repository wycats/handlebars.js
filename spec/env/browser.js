var local = global || window;

local.CompilerContext = {
  compile: function(template, options) {
    var templateSpec = handlebarsEnv.precompile(template, options);
    return handlebarsEnv.template(safeEval(templateSpec));
  },
  compileWithPartial: function(template, options) {
    return handlebarsEnv.compile(template, options);
  }
};

function safeEval(templateSpec) {
  return eval('(' + templateSpec + ')');
}

local.equals = local.equal = function(a, b, msg) {
  a.should.equal(b, msg || '');
};
