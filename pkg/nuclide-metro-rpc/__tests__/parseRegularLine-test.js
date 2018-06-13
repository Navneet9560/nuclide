'use strict';

var _parseRegularLine;

function _load_parseRegularLine() {
  return _parseRegularLine = require('../lib/parseRegularLine');
}

describe('parseRegularLine', () => {
  it('parses the message when the time is in brackets', () => {
    const parsed = (0, (_parseRegularLine || _load_parseRegularLine()).parseRegularLine)('[2:08:50 PM] This is the message text');
    expect(parsed.text).toBe('This is the message text');
  });

  it('parses the message when the date is included', () => {
    const parsed = (0, (_parseRegularLine || _load_parseRegularLine()).parseRegularLine)('[8/30/2016, 2:10:50 PM] This is the message text');
    expect(parsed.text).toBe('This is the message text');
  });

  it('parses the message when the time is short', () => {
    const parsed = (0, (_parseRegularLine || _load_parseRegularLine()).parseRegularLine)('[08/30/2016 14:08:50] This is the message text');
    expect(parsed.text).toBe('This is the message text');
  });

  it("parses the message when the timestamp's not in brackets", () => {
    const parsed = (0, (_parseRegularLine || _load_parseRegularLine()).parseRegularLine)('2016-08-31 10:28:11.931 This is the message text');
    expect(parsed.text).toBe('This is the message text');
  });

  it("parses the message when there's no timestamp", () => {
    const parsed = (0, (_parseRegularLine || _load_parseRegularLine()).parseRegularLine)('This is the message text');
    expect(parsed.text).toBe('This is the message text');
  });
}); /**
     * Copyright (c) 2015-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the license found in the LICENSE file in
     * the root directory of this source tree.
     *
     *  strict-local
     * @format
     */