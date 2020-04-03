import Head from 'next/head';
import * as React from 'react';

import { MainLayout } from '@app/features/main/layout';

import * as styles from './AllExperts.css';
import ExpertsList from '../../organisms/ExpertsList';
import {useMappedState} from "@app/node_modules/redux-react-hook";
import {selectExperts} from "@app/features/common/expertReducer/selectPartners";


const AllExperts = () => {
    const experts = useMappedState(selectExperts);

    return (
        <MainLayout className={styles.main}>
            <Head>
                <title>Эксперты | Просто спросить</title>
            </Head>
            <h1 className={styles.title}>Наши эксперты</h1>
            <ExpertsList experts={experts}/>
        </MainLayout>
    )
};

export default AllExperts;
