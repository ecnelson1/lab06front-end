import request from 'superagent';

const URL = 'https://serene-bayou-70686.herokuapp.com'

export async function getCast(){
    const castMembers = await request.get(`${URL}/characters`);
    this.setState({
        castMembers: castMembers.body,
    })
};
export async function getTypes(){
    const types = await request.get(`${URL}/types`);
    this.setState({
        types: types.body,
    })
};
export async function getChar(id){
    const castMember = request.get(`${URL}/characters/${id}`);
    this.setState({
        memberDetails: castMember.body
    });
};

export async function makeChar(newChar) {
    const Char = await request
        .post(`${URL}/characters/`)
        .send(newChar);

        return Char.body;
};
export async function updateCandy(id, char) {
    const updatedChar = await request.put(`${URL}/characters/${id}`)
        .send(char);

        return updatedChar.body;
};
export async function deleteChar(id) {
    const deleted = await request.delete(`${URL}/characters/${id}`);

    return deleted.body;
}