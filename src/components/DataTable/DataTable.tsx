import {FunctionComponent, isValidElement, MouseEvent} from "react"

import styles from "./styles.module.css"

type classNames = {
    tableWrapperClassName?: string,
    tableClassName?: string,
    tableHeaderClassName?: string,
    bodyClassName?:string,
    rowClassName?: string,
    cellClassName?: string,
    headingClassName?: string,
}

type DataObject = any & object


interface DataTableProps {
    headings: string[],
    data?: DataObject[],
    onRowClick?: (event: MouseEvent<HTMLDivElement>, object: DataObject) => void,
    classNames?: classNames,
    showRowNumber?: boolean,
}

export const DataTable: FunctionComponent<DataTableProps> = ({headings, data, onRowClick, classNames, showRowNumber = false}) => {
    const columnsNumber = data && data.length ? Object.keys(data[0]).length : headings ? headings.length : 1
    const rowStyle = {gridAutoColumns: `minmax(20ch, calc(100% / ${columnsNumber}))`, cursor: onRowClick && 'pointer'}

    return (
        <div className={`${classNames?.tableWrapperClassName || ""} ${styles.wrapper}`}>
            <div className={`${classNames?.tableClassName || ""} ${styles.table}`}>
                <div className={`${classNames?.tableHeaderClassName || ""} ${styles.header}`}>
                    <div className={`${classNames?.rowClassName || ""} ${styles.row}`} style={rowStyle}>
                        {
                            showRowNumber &&
                            <div className={`${classNames?.headingClassName || ""} ${styles.heading}`}>№</div>
                        }
                        {headings.map((heading, colNumber) => (
                            <div className={`${classNames?.headingClassName || ""} ${styles.heading}`} key={colNumber}>
                                {heading}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${classNames?.bodyClassName || ""} ${styles.body}`}>
                    {data && data.map((dataObject, rowNumber) => (
                        <div className={`${classNames?.rowClassName || ""} ${styles.row}`} key={rowNumber} style={rowStyle} onClick={(event: MouseEvent<HTMLDivElement>) => onRowClick && onRowClick(event, dataObject)}>
                            {
                                showRowNumber &&
                                <div className={`${classNames?.cellClassName || ""} ${styles.cell}`}>{rowNumber + 1}</div>
                            }
                            {Object.values(dataObject).map((dataValue, colNumber) => (
                                <div className={`${classNames?.cellClassName || ""} ${styles.cell}`} key={colNumber}>
                                    {typeof dataValue === 'object' ? isValidElement(dataValue) ? dataValue : JSON.stringify(dataValue as object) : <span>{String(dataValue)?.toString() as string}</span>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
