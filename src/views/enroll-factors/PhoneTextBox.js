/*!
 * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

define([
  'okta',
  'shared/views/forms/inputs/TextBox'
],
function (Okta, TextBox) {

  var _ = Okta._;

  return TextBox.extend({

    template: Okta.Handlebars.compile('\
      <span class="okta-form-label-inline o-form-label-inline">{{countryCallingCode}}</span>\
      <span class="okta-form-input-field input-fix o-form-control">\
        <input type="{{type}}" placeholder="{{placeholder}}" name="{{name}}" \
          id="{{inputId}}" value="{{value}}" autocomplete="off"/>\
      </span>\
    '),

    initialize: function () {
      this.listenTo(this.model, 'change:countryCallingCode', function () {
        this.$('.o-form-label-inline').text(this.model.get('countryCallingCode'));
      });
    },

    preRender: function () {
      this.options.countryCallingCode = this.model.get('countryCallingCode');
    },

    postRender: function () {
      // This is a hack - once inputGroups are done, get rid of it!!
      this.$el.removeClass('input-fix o-form-control');
      _.defer(_.bind(function () {
        this.$el.parent().addClass('o-form-input-group');
      }, this));
    }

  });

});
