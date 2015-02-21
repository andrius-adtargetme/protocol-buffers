var tape = require('tape')
var path = require('path')
var protobuf = require('../require')
var messages = protobuf('./test.proto')

tape('enums', function(t) {
  var e = messages.FOO

  t.same(e, {A:1, B:2}, 'enum is defined')
  t.end()
})

tape('hex enums', function(t) {
  var e = messages.FOO_HEX

  t.same(e, {A:1, B:2}, 'enum is defined using hex')
  t.end()
})