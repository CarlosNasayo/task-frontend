import React, { useState, useEffect } from 'react';
import Things from '../components/things';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Thing = () => {
    const [data, setData] = useState(null);
    const [isMounted, setIsMounted] = useState(true);


    useEffect(() => {
        setIsMounted(true);

        axios.get('https://task-api-backend.onrender.com/api/tasks/get_tasks')
            .then((res) => {
                if (isMounted) {
                    setData(res.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        return () => {
            setIsMounted(false);
        };
    }, [isMounted]);

    const updateStatus = (id, completed) => {
        axios.patch(`https://task-api-backend.onrender.com/api/tasks/${id}?status=${completed}`)
            .then((res) => {
                if (isMounted) {
                    setData((prevData) => {
                        const updatedData = [...prevData];
                        const itemIndex = updatedData.findIndex((item) => item.id === id);
                        if (itemIndex !== -1) {
                            updatedData[itemIndex] = { ...updatedData[itemIndex], completed: completed };
                        }
                        return updatedData;
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const updateStatusDelete = (id) => {
        axios.delete(`https://task-api-backend.onrender.com/api/tasks/${id}`)
            .then((res) => {
                console.log(res.data);
                if (isMounted) {
                    setData((prevData) => {
                        // Filter out the deleted item
                        const updatedData = prevData.filter((item) => item.id !== id);
                        return updatedData;
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    
    
    return (
      <div className="container">
        <div className="row mx-auto">
            <div className='text-end p-2'>
            <button className="btn btn-primary ">Agregar Tarea</button>

            </div>

          {data &&
            data.map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <Things
                  handlestatusdelete={updateStatusDelete}
                  handlestatus={updateStatus}
                  id={item.id}
                  index={index}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  setData={setData}
                />
              </div>
            ))}
        </div>
      </div>
    );
};

export default Thing;
