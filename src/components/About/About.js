import React from 'react';
import styles from './About.module.css';
import { Octokit } from '@octokit/rest';
import { ownerDocument } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        infoUser: {},
        isError: false
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'aaanastasiia'
        }).then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false
            });
        })
          .catch(error => {
              this.setState({
                isLoading: false,
                isError: true,
                error: error.message
            });
          });

        octokit.users.getByUsername({
            username: 'aaanastasiia'
          }).then(({ data }) => {
              this.setState({
                  infoUser: data,
                  isLoading: false
              });
          })
          .catch(error => {
            this.setState({
              isLoading: false,
              isError: true,
              error: error.message
          });
        });
    }

    render() {
        const { isLoading, repoList, infoUser, isError } = this.state;
        return (
            <h1 className={styles.title}>
                { isLoading ? <div className={styles.loadingio}><div className={styles.ldio}>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div></div> : 
                    <div>
                        { isError ? <Alert severity="error">SORRY, THE PAGE NOT FOUND</Alert> :
                            <div> 
                                <div className={styles.user}>
                                    <img src={infoUser.avatar_url} className={styles.avatar}></img>
                                        <div className={styles.user__wrap}>
                                            <h3 className={styles.user__name}>{infoUser.name}</h3>
                                            <h4 className={styles.user__info}>{infoUser.bio}</h4>
                                            <h4 className={styles.user__info}>{infoUser.location}</h4>
                                         </div>
                                </div>
                                <h3>Мои репозитории:</h3>
                                    <ol className={styles.list}>
                                        {repoList.map(repo => (<li key={repo.id} className={styles.item}>
                                        <a href={repo.html_url} className={styles.repo}>{repo.name}</a>
                                        </li>))}
                                    </ol>
                            </div>
                        }
                    </div>
                }
            </h1>
        );
    }
}
     
export default About;