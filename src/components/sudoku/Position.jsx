/**
 * Copyright (c) 2018-2019,  Charlie Feng. All Rights Reserved.
 */

import React from 'react';
import MarkedCell from './MarkedCell';
import './styles.css';
import bg from './bg.png';

const Position = props => {
    //Todo
    //const refCell = null;
    const cells = props.position.split('|');
    const refCells = props.refCells;
    const keyCell = props.cell;

    return (
        <div style={{ textAlign: 'center', margin: '0px auto', height: 444 }}>
            <img src={bg} className="gridBg" alt="bg" />

            <div className="gridFg">
                <div style={{ position: 'relative', left: 0 }}>
                    <table id="tab" className="gridTable">
                        <tbody>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(iRow => {
                                return (
                                    <tr key={'tr' + iRow} className="grid">
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(iCol => {
                                            return (
                                                <MarkedCell
                                                    key={'cell' + iRow * 9 + iCol}
                                                    value={cells[iRow * 9 + iCol]}
                                                    isKeyCell={
                                                        `(${iRow + 1},${iCol + 1})` === keyCell
                                                    }
                                                    isRefCell={refCells.includes(
                                                        `(${iRow + 1},${iCol + 1})`
                                                    )}
                                                />
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <p />
            </div>
        </div>
    );
};

export default Position;
