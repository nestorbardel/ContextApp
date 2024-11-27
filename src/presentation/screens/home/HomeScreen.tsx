import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const HomeScreen = () => {
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const changeProfile = useProfileStore(state => state.changeProfile);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>
            <Pressable
                onPress={() =>
                    useProfileStore.setState({name: 'Nestor Bardel'})
                }
                style={styles.primaryButton}>
                <Text>Cambiar Nombre</Text>
            </Pressable>

            <Pressable
                onPress={() =>
                    useProfileStore.setState({email: 'nestor.bardel@gmail.com'})
                }
                style={styles.primaryButton}>
                <Text>Cambiar Email</Text>
            </Pressable>

            <Pressable
                onPress={() =>
                    changeProfile('Jonh Doe', 'john.doe@google.com')
                }
                style={styles.primaryButton}>
                <Text>Regresar a John</Text>
            </Pressable>
        </View>
    );
};
