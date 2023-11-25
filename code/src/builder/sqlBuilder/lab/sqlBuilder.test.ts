import { SQLQueryBuilder } from "./sqlQueryBuilder";

describe('Lab SQL Builder', () => {
    it('should build simple SQL query', () => {

        //given
        const query = new SQLQueryBuilder();
        const expectedQuery = 'SELECT * FROM user';

        //when
        const sql = query.select('*').from('user').build();

        //then
        expect(sql).toEqual(expectedQuery);
    })

});