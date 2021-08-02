import { registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted, initGlobalState } from 'qiankun';
// 主应用
import render from './render/VueRender.js';
import './index.less';

render({ loading: true });

// 注册子应用
registerMicroApps([
    {
        name: 'react',
        entry: '//localhost:7100',
        container: '#subapp-viewport',
        activeRule: '/react',
    },
    {
        name: 'vue',
        entry: '//localhost:7101',
        container: '#subapp-viewport',
        activeRule: '/vue',
    },
    {
        name: 'pure',
        entry: '//localhost:7104',
        container: '#subapp-viewport',
        activeRule: '/pure',
    },
], {
    beforeLoad: [
        app => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
    ],
    beforeMount: [
        app => {
          console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
    ],
    afterUnmount: [
        app => {
          console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
    ],
});

const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun',
});

onGlobalStateChange((value, prev) => {
    console.log('[onGlobalStateChange - master]:', value, prev);
});

setGlobalState({
    ignore: 'master',
    user: {
        name: 'master',
    },
});

// 设置默认进入的子应用
setDefaultMountApp('/react16');

// 启动 qiankun
start();

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});