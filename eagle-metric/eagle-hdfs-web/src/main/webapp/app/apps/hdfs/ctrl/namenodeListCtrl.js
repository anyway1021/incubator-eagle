/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function () {
	/**
	 * `register` without params will load the module which using require
	 */
	register(function (hdfsMetricApp) {

		hdfsMetricApp.controller("namenodeListCtrl", function ($wrapState, $scope, PageConfig, HDFSMETRIC) {

			// Initialization
			PageConfig.title = "HDFS Namenode List";
			$scope.tableScope = {};
			$scope.site = $wrapState.param.siteId;
			$scope.status = $wrapState.param.status;
			$scope.searchPathList = [["tags", "hostname"], ["tags", "rack"], ["tags", "site"], ["status"]];
			$scope.namenodeList = (typeof $scope.status === 'undefined') ? HDFSMETRIC.getListByRoleName("HdfsServiceInstance", "namenode", $scope.site)
				: HDFSMETRIC.getHadoopHostByStatusAndRole("HdfsServiceInstance", $scope.site, $scope.status, "namenode");
		});
	});
})();
