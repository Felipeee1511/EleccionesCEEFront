import '../../styles/components/tables.css';

const ListAlumnos = () => {

    return (
        <>
         <table className="styled-table">
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
            <th>Columna 4</th>

          </tr>
        </thead>
        <tbody>
          {/* {data.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
            </tr>
          ))} */}
          
            <tr >
              <td>1,1</td>
              <td>1,2</td>
              <td>1,3</td>
              <td>1,4</td>

            </tr>

            <tr >
              <td>2,1</td>
              <td>2,2</td>
              <td>2,3</td>
              <td>2,4</td>

            </tr>

            <tr >
              <td>3,1</td>
              <td>3,2</td>
              <td>3,3</td>
              <td>3,4</td>

            </tr>
         
        </tbody>
      </table>
        </>
    )
};
export default ListAlumnos;