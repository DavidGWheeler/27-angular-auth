'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing HomeController', function() {
  beforeEach(() => {
    angular.mock.module('cfGramApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should exist', () => {

    expect(this.homeCtrl).toBeDefined();
  });

  it('should have a title', () => {

    expect(this.homeCtrl.title).toBeDefined();
    expect(this.homeCtrl.title).toEqual(jasmine.any(String));
    expect(this.homeCtrl.title).toBe('Welcome to Home');
  });
});