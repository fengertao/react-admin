/**
 * Copyright (c) 2018-2019,  Charlie Feng. All Rights Reserved.
 */

import React, { useContext, useState } from 'react';
import { Form, Icon, Input, Button, Checkbox, Spin, message } from 'antd';
import { PwaInstaller } from '../widget';
import { AuthContext } from '@/context/AuthContext';
import { LOGIN_SUCCESSFUL } from '@/context/AuthAction';
import { login } from '@/axios/AuthService';

const FormItem = Form.Item;

const Login = props => {
    const { dispatch } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                async function tryLogin() {
                    setLoading(true);
                    await login({
                        username: values.userName,
                        password: values.password,
                    })
                        .then(response => {
                            dispatch({ type: LOGIN_SUCCESSFUL, data: response.data });
                            props.history.push('/');
                        })
                        .catch(error => {
                            message.error('Login failure: ' + error.message);
                            setLoading(false);
                        });
                }

                tryLogin();
            }
        });
    };
    const gitHub = () => {
        window.location.href =
            'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
    };

    return (
        <div className="login">
            <Spin spinning={loading} size="large" tip="登录中...">
                <div className="login-form">
                    <div className="login-logo">
                        <span>Sudoku Master</span>
                        <PwaInstaller />
                    </div>
                    <Form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                    placeholder="guest"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                    type="password"
                                    placeholder="guest"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住我</Checkbox>)}
                            <span className="login-form-forgot" href="" style={{ float: 'right' }}>
                                忘记密码
                            </span>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{ width: '100%' }}
                            >
                                登录
                            </Button>
                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>或 现在就去注册!</span>
                                <span onClick={gitHub}>
                                    <Icon type="github" />
                                    (第三方登录)
                                </span>
                            </p>
                        </FormItem>
                    </Form>
                </div>
            </Spin>
        </div>
    );
};

export default Form.create()(Login);
