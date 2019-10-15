/**
 * Copyright (c) 2018-2019,  Charlie Feng. All Rights Reserved.
 */

import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import PlayGrid from './PlayGrid';

class Sudoku extends Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="数独" />
                <Row gutter={16} type="flex">
                    <Col
                        className="gutter-row"
                        style={{
                            width: 450,
                            minWidth: 450,
                            maxWidth: 450,
                            flexGrow: 0,
                        }}
                    >
                        <div className="gutter-box">
                            <Card title="盘面" bordered={false}>
                                <PlayGrid />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" style={{ width: 'auto', flexGrow: 1 }}>
                        <div className="gutter-box">
                            <Card title="解题步骤" bordered={false} style={{ height: 550 }} />
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="历史记录" bordered={false} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Sudoku;
