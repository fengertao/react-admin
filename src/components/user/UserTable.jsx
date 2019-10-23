/**
 * Copyright (c) 2018-2019,  Charlie Feng. All Rights Reserved.
 */
import React, { useState, useEffect } from 'react';
import { Table, Icon, Spin } from 'antd';
import RoleTag from './RoleTag';
import { getAll } from '@/axios/UserService';



const UserTable = props => {

    let [selectedRowKeys, setSelectedRowKeys] = useState([]);
    let [loading, setLoading] = useState(false);
    let [data, setData] = useState([]);
    let [filteredInfo, setFilteredInfo]= useState({});
    let [sortedInfo, setSortedInfo]= useState({});

    useEffect(() => {
        setLoading(true);
        getAll().then(resp => {
            setLoading(false);
            const data = resp.data;
            const showData = data.map(user => {return {...user, password: user.password.substr(0, 6) + "..."}});
            setData(showData);
        });
    }, []);


    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const onSelectChange = selectedRowKeys => {
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            sorter: (a, b) => a.username > b.username,
            sortOrder: sortedInfo.columnKey === 'username' && sortedInfo.order,
        },
        {
            title: '昵称',
            dataIndex: 'fullName',
            sorter: (a, b) => a.fullName > b.fullName,
            sortOrder: sortedInfo.columnKey === 'fullName' && sortedInfo.order,
        },
        {
            title: '密码',
            dataIndex: 'password',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            sorter: (a, b) => a.email > b.email,
            sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
        },
        {
            title: '角色',
            dataIndex: 'roles',
            filters: [
                { text: 'Root', value: 'ROLE_ROOT' },
                { text: 'Admin', value: 'ROLE_ADMIN' },
                { text: 'Vip', value: 'ROLE_VIP' },
                { text: 'User', value: 'ROLE_USER' },
                { text: 'Applicant', value: 'ROLE_APPLICANT' },
                { text: 'Guest', value: 'ROLE_ANONYMOUS' },
            ],
            filteredValue: filteredInfo.roles || null,
            onFilter: (value, record) => record.roles.filter((role) => role.name===value).length,
            sorter: (a, b) => a.roles[0].name > b.roles[0].name,
            sortOrder: sortedInfo.columnKey === 'roles' && sortedInfo.order,
            render: roles => (
                <span>
                {roles.map(role => (
                    <RoleTag key={role.name} role={role} />
                ))}
            </span>
            ),
        },
        {
            title: '激活',
            dataIndex: 'enabled',
            render: enabled => (
                <Icon type={enabled ? 'check-circle' : 'close-circle'} theme="twoTone" />
            ),
            filters: [
                { text: '已激活', value: true },
                { text: '未激活', value: false },
            ],
            filteredValue: filteredInfo.enabled || null,
            onFilter: (value, record) => record.enabled === value,
            sorter: (a, b) => a.enabled > b.enabled,
            sortOrder: sortedInfo.columnKey === 'enabled' && sortedInfo.order,
        },
    ];

    return (
        <Spin spinning={loading} size="large">
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                rowKey="username"
                onChange = {handleChange}
            />
        </Spin>
    );
};

export default UserTable;
