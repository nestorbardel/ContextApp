import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../../config';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {
    const name = useProfileStore((state) => state.name);
    const email = useProfileStore((state) => state.email);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
        </View>
    );
};
