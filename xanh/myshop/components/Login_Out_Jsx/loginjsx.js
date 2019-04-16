const loginjsx = (

    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }} >
        <   Text style={{ color: '#FFF', textAlign: "center", marginBottom: 10 }}>{user ? user.name : ''}</Text>

        <View style={style.space}>
            <FAIcon name='info' size={28} color={'black'} style={{
                position: 'absolute',
                top: 10,
                left: 37
            }} />
            <TouchableOpacity style={style.btnout} onPress={() => this.props.navigation.navigate('Changeinfo', { user: this.state.user })}>
                <Text style={{ color: '#FFF', textAlign: "center" }}>Thay đổi thông tin</Text>
            </TouchableOpacity>
        </View>

        <View style={style.space}>
            <FAIcon name='exchange' size={28} color={'black'} style={{
                position: 'absolute',
                top: 10,
                left: 37
            }} />
            <TouchableOpacity style={style.btnout} onPress={() => this.props.navigation.navigate('Orderhistory')}>
                <Text style={{ color: '#FFF', textAlign: "center" }}>Lịch sử mua hàng</Text>
            </TouchableOpacity>
        </View>

        <View style={style.space}>
            <FAIcon name='sign-out' size={28} color={'black'} style={{
                position: 'absolute', top: 10, left: 37
            }} />
            <TouchableOpacity style={style.btnout}
                onPress={this.onsignout.bind(this)}
            >
                <Text style={{ color: '#FFF', textAlign: "center" }}>Đăng xuất</Text>
            </TouchableOpacity>


        </View>
        <View style={style.space}>
            <FAIcon name='sign-out' size={28} color={'black'} style={{
                position: 'absolute', top: 10, left: 37
            }} />
            <Button style={{
                alignItems: 'center', justifyContent: 'center',
                height: 50, borderRadius: 20, paddingHorizontal: 70
            }}
                title="Pick an image from camera roll"
                onPress={this.takePhotoAndUpload.bind(this)}
            />

        </View>
    </View>
);
export default loginjsx