import React, { Component } from 'react';
import Routes from './routes';
import DocumentTitle from 'react-document-title';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { Layout, notification, Icon } from 'antd';
import { ThemePicker } from './components/widget';

const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        title: '',
    };
    componentWillMount() {
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        };
    }
    componentDidMount() {
        const openNotification = () => {
            notification.open({
                message: '博主：fengertao',
                description: (
                    <div>
                        <p>
                            GitHub地址：{' '}
                            <a
                                href="https://github.com/fengertao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://github.com/fengertao
                            </a>
                        </p>
                        <p>
                            博客地址：{' '}
                            <a
                                href="http://blog.warrenfeng.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                http://blog.warrenfeng.com/
                            </a>
                        </p>
                    </div>
                ),
                icon: <Icon type="smile-circle" style={{ color: 'red' }} />,
                duration: 0,
            });
            localStorage.setItem('isFirst', JSON.stringify(true));
        };
        const isFirst = JSON.parse(localStorage.getItem('isFirst'));
        !isFirst && openNotification();
    }
    getClientWidth = () => {
        //Todo manage responsive by useContext
        // 获取当前浏览器宽度并设置responsive管理响应式
        // const clientWidth = window.innerWidth;
        // setAlitaState({ stateName: 'responsive', data: { isMobile: clientWidth <= 992 } });
        // receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { title } = this.state;
        const { auth = { data: {} }, responsive = { data: {} } } = this.props;
        return (
            <DocumentTitle title={title}>
                <Layout>
                    {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                    <ThemePicker />
                    <Layout style={{ flexDirection: 'column' }}>
                        <HeaderCustom
                            toggle={this.toggle}
                            collapsed={this.state.collapsed}
                            user={auth.data || {}}
                        />
                        <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                            <Routes auth={auth} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Sudoku Master ©{new Date().getFullYear()} Created by Charlie Feng
                        </Footer>
                    </Layout>
                </Layout>
            </DocumentTitle>
        );
    }
}

export default App;
