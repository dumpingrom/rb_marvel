'use strict';

angular.module('rbMarvel.version', [
  'rbMarvel.version.interpolate-filter',
  'rbMarvel.version.version-directive'
])

.value('version', '0.1');
