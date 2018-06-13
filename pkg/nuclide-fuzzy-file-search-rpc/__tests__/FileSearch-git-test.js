'use strict';

var _fs = _interopRequireDefault(require('fs'));

var _nuclideUri;

function _load_nuclideUri() {
  return _nuclideUri = _interopRequireDefault(require('../../../modules/nuclide-commons/nuclideUri'));
}

var _process;

function _load_process() {
  return _process = require('../../../modules/nuclide-commons/process');
}

var _testHelpers;

function _load_testHelpers() {
  return _testHelpers = require('../../../modules/nuclide-commons/test-helpers');
}

var _a_file_search_should;

function _load_a_file_search_should() {
  return _a_file_search_should = require('../__mocks__/a_file_search_should');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */

jest.setTimeout(30000);

async function gitTestFolder() {
  const folder = await (0, (_a_file_search_should || _load_a_file_search_should()).createTestFolder)();

  await (0, (_process || _load_process()).runCommand)('git', ['init'], { cwd: folder }).toPromise();
  await (0, (_process || _load_process()).runCommand)('git', ['add', '*'], { cwd: folder }).toPromise();

  // After adding the existing files to git, add an ignored file to
  // prove we're using git to populate the list.
  const ignoredFile = 'ignored';
  _fs.default.writeFileSync((_nuclideUri || _load_nuclideUri()).default.join(folder, ignoredFile), '');
  _fs.default.writeFileSync((_nuclideUri || _load_nuclideUri()).default.join(folder, '.gitignore'), `.gitignore\n${ignoredFile}`);

  return folder;
}

(0, (_a_file_search_should || _load_a_file_search_should()).aFileSearchShould)('Git', gitTestFolder);