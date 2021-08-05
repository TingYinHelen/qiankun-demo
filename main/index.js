import { registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted, initGlobalState } from 'qiankun';
// 主应用
import render from './render/VueRender.js';
import './index.less';

render({ loading: true });
const loader = (loading) => {
    render({ loading });
};

// 注册子应用
registerMicroApps([
    {
        name: 'react',
        entry: '//localhost:7100',
        container: '#subapp-viewport',
        activeRule: '/react',
        loader,
    },
    {
        name: 'vue',
        entry: '//localhost:7101',
        container: '#subapp-viewport',
        activeRule: '/vue',
        loader,
    },
    {
        name: 'purehtml',
        entry: '//localhost:7104',
        container: '#subapp-viewport',
        loader,
        activeRule: '/purehtml',
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
setDefaultMountApp('/vue');

// 启动 qiankun
start();

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});