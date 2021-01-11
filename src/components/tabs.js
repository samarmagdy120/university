import React, { useState } from 'react'
import { Tab, Tabs } from '@material-ui/core';
import { FaUserAlt} from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import i18next from '../i18n';


  
const TabsAll = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState(0)
    const handleTabs = (e, val) => {
        console.log(val);
        setValue(val)
    }
    return (
        <div className="container">
            <div className="tabSection">
                <Tabs value={value} onChange={handleTabs} centered TabIndicatorProps={{style: {background:'#007bff'}}}>
                    <Tab label={t("All.1")} className="tab-btn"/>
                    <Tab label={t("Under Review.1")} />
                    <Tab label={t("Intial Acceptance.1")} />
                    <Tab label={t("Conditional Acceptance.1")} />
                    <Tab label={t("Reject.1")} />

                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="table-responsive">
                    <table className="table responsive">
                        <thead>
                        
                            <tr>
                                <th scope="col">{t('Name.1')}</th>
                                <th scope="col">{t('Status.1')}</th>
                                <th scope="col">{t('Major.1')}</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            <tr>
                                <td> <FaUserAlt className="nav-tab"/>{t('Ebrahim Elsyd Awd.1')}</td>
                                <td>{t('Ebrahim Elsyd Awd.1')}</td>
                                <td>{t('Ebrahim Elsyd Awd.1')}</td>
                                                         </tr>
                            <tr>
                            <td><FaUserAlt className="nav-tab"/>{t('Ebrahim Elsyd Awd.1')} </td>
                                <td>{t('Ebrahim Elsyd Awd.1')}</td>
                                <td>{t('Ebrahim Elsyd Awd.1')}</td>
                            </tr>
                            <tr>
                            <td><FaUserAlt className="nav-tab"/>{t('Ebrahim Elsyd Awd.1')}</td>
                                <td>{t('Ebrahim Elsyd Awd.1')}</td>
                                <td>{t('Ebrahim Elsyd Awd.1')}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>item2</TabPanel>
                <TabPanel value={value} index={2}>item3</TabPanel>
            </div>
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index } = props

    return (
        <div>{
            value === index && (
                <h1>{children}</h1>)}</div>
    )
}
export default TabsAll
