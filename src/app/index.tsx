import {View, Text, StyleSheet} from 'react-native'

const Index = (): JSX.Element =>{
    return(
        <View style={styles.container}>

            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>Log out</Text>
                </View>
            </View>

            <View>

                <View>
                    <View>
                        <Text>Худалдан авах бүтээгдэхүүний жагсаалт</Text>
                        <Text>2023.04.01 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>Худалдан авах бүтээгдэхүүний жагсаалт</Text>
                        <Text>2023.04.01 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>Худалдан авах бүтээгдэхүүний жагсаалт</Text>
                        <Text>2023.04.01 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>

            <View>
                <Text>+</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Index
