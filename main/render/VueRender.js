import Vue from 'vue/dist/vue.esm';

function VueRender ({ loading }) {
    new Vue({
        el: "#subapp-container",
        template: `
            <div id="subapp-container">
                <h4 v-if="loading" class="subapp-loading">Loading...</h4>
                <div id="subapp-viewport"></div>
            </div>
        `,
        data() {
            return {
                loading,
            };
        },
    });
}

export default VueRender;