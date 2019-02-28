import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from "react-router";
import iconEdit from '../../resources/img/icon-edit.svg'

class FileCard extends Component {

    render() {

        const { id, providerId, fileName, fileTitle, fileType, createdAt, updatedAt, fileLink } = this.props;

        return (
            <div class="col-12">
                <div class="c-card c-card-shadow p-0">
                    <div class="p-3">
                        <div class="media"><img class="image-48 mr-3" src={fileTitle} alt="image type" />
                            <div class="media-body"><a href='#' download>
                                <div class="d-flex">
                                    <div class="t-400-h text-left">{fileName}</div><img class="ml-auto" src={iconEdit} />
                                </div></a>
                                <div class="t-400 c-gray-400 text-left">{moment(createdAt).format('MMM Do, h:mma')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FileCard);
