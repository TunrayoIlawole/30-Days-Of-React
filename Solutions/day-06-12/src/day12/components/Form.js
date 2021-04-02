import React, {Component} from 'react';

const options = [
    {
      value: '',
      label: '-- Select Country--',
    },
    {
      value: 'Finland',
      label: 'Finland',
    },
    {
      value: 'Sweden',
      label: 'Sweden',
    },
    {
      value: 'Norway',
      label: 'Norway',
    },
    {
      value: 'Denmark',
      label: 'Denmark',
    },
]

const selectOptions = options.map(({ value, label }) => {
    <option value = {value}>{label}</option>
});

class Form extends Component {
    // declaring state
    state = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
            html: false,
            css: false,
            javascript: false,
        },
        touched: {
            firstName: false,
            lastName: false,
            email: false,
            country: false,
            tel: false,
            dateOfBirth: false,
            favoriteColor: false,
            weight: false,
            gender: false,
            file: false,
            bio: false,
            skills: false
        }
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            this.setState({
                skills: { ...this.state.skills, [name]: checked }
            })
        } else if (type === 'file') {
            this.setState({
                [name]: e.target.files[0]
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    handleBlur = (e) => {
        const { name, value } = e.target;

        this.setState({
            touched: { ...this.state.touched, [name]: true}
        })
    }

    handleEmpty = (input, touchedInput, error) => {
        let message = '';
        if (!touchedInput) {
            message = `${input} cannot be empty`;
            error = message;
        }

        return;
    }

    validate = () => {
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            tel: '',
            dateOfBirth: '',
            favoriteColor: '',
            weight: '',
            gender: '',
            file: '',
            bio: '',
            skills: ''
        };

        if (
            (this.state.touched.firstName && this.state.firstName.length < 3) ||
            (this.state.touched.firstName && this.state.firstName.length > 12)
        ) {
            errors.firstName = 'First name must be between 2 and 12';
        }

        if (
            (this.state.touched.lastName && this.state.lastName.length < 3) ||
            (this.state.touched.lastName && this.state.lastName.length > 12)
        ) {
            errors.lastName = 'Last name must be between 2 and 12';
        }

        this.handleEmpty("Email", this.state.touched.email, errors.email);
        this.handleEmpty("Country", this.state.touched.country, errors.country);
        this.handleEmpty("Telephone Number", this.state.touched.tel, errors.tel);
        this.handleEmpty("Date of birth", this.state.touched.dateOfBirth, errors.dateOfBirth);
        this.handleEmpty("Favorite color", this.state.touched.favoriteColor, errors.favoriteColor);
        this.handleEmpty("Weight", this.state.touched.weight, errors.weight);
        this.handleEmpty("Gender", this.state.touched.gender, errors.gender);
        this.handleEmpty("File", this.state.touched.file, errors.file);
        this.handleEmpty("Bio", this.state.touched.bio, errors.bio);
        this.handleEmpty("Skills", this.state.touched.skills, errors.skills);

        return errors;

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {
            firstName,
            lastName,
            email,
            country,
            gender,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            bio,
            file,
            skills,
        } = this.state
      
        const formattedSkills = []
          for (const key in skills) {
            console.log(key);
            if (skills[key]) {
              formattedSkills.push(key.toUpperCase())
            }
        }
        const data = {
            firstName,
            lastName,
            email,
            country,
            gender,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            bio,
            file,
            skills: formattedSkills,
        }
        console.log(data);
    }

    render() {
        const { firstName, lastName, email, country, tel, dateOfBirth, favoriteColor, weight, gender, file, bio, skills } = this.validate();

        return (
            <div className = "form">
                <h3>Add Student</h3>
                <form onSubmit = {this.handleSubmit} noValidate >
                    <div className = "row">
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name </label>
                            <input
                                type='text'
                                name='firstName'
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder='First Name'
                            />{' '}
                            <br />
                            <small>{firstName}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name </label>
                            <input
                                type='text'
                                name='lastName'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder='Last Name'
                            />{' '}
                            <br />
                            <small>{lastName}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email </label>
                            <input
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder='Email'
                            />{' '}
                            <br />
                            <small>{email}</small>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='tel'>Telephone </label>
                        <input
                        type='tel'
                        name='tel'
                        value={this.state.tel}
                        onChange={this.handleChange}
                        placeholder='Tel'
                        />{' '}
                        <br />
                        <small>{tel}</small>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='dateOfBirth'>Date of birth </label>
                        <input
                        type='date'
                        name='dateOfBirth'
                        value={this.state.dateOfBirth}
                        onChange={this.handleChange}
                        placeholder='Date of Birth'
                        />{' '}
                        <br />
                        <small>{dateOfBirth}</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='favoriteColor'>Favorite Color</label>
                        <input
                        type='color'
                        id='favoriteColor'
                        name='favoriteColor'
                        value={this.state.favoriteColor}
                        onChange={this.handleChange}
                        placeholder='Favorite Color'
                        />{' '}
                        <br />
                        <small>{favoriteColor}</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='weight'>Weight </label>
                        <input
                        type='number'
                        id='weight'
                        name='weight'
                        value={this.state.weight}
                        onChange={this.handleChange}
                        placeholder='Weight in Kg'
                        />{' '}
                        <br />
                        <small>{weight}</small>
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label> <br />
                        <select name='country' onChange={this.handleChange} id='country'>
                        {selectOptions}
                        </select>
                    </div>

                    <div>
                        <p>Gender</p>
                        <div>
                            <input
                                type='radio'
                                id='female'
                                name='gender'
                                value='Female'
                                onChange={this.handleChange}
                                checked={this.state.gender === 'Female'}
                            />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <div>
                            <input
                                id='male'
                                type='radio'
                                name='gender'
                                value='Male'
                                onChange={this.handleChange}
                                checked={this.state.gender === 'Male'}
                            />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div>
                            <input
                                id='other'
                                type='radio'
                                name='gender'
                                value='Other'
                                onChange={this.handleChange}
                                checked={this.state.gender === 'Other'}
                            />
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>

                    <div>
                        <p>Select your skills</p>
                        <div>
                            <input
                                type='checkbox'
                                id='html'
                                name='html'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='html'>HTML</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                id='css'
                                name='css'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='css'>CSS</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                id='javascript'
                                name='javascript'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='javascript'>JavaScript</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='bio'>Bio</label> <br />
                        <textarea
                        id='bio'
                        name='bio'
                        value={this.state.bio}
                        onChange={this.handleChange}
                        cols='120'
                        rows='10'
                        placeholder='Write about yourself ...'
                        />
                    </div>

                    <div>
                        <input type='file' name='file' onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Form;