import { PromptCard } from './'


const Profile = ({ name, desc, data, profileType, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      {profileType==='Personal' ? (
        <>
          <h1 className='head_text text-left'>
            <span className='blue-gradient'>{name} Profile</span>
          </h1>
          <p className="desc text-left">
            {desc}
          </p>
          <div className="mt-10 prompt_layout">
            {data.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
                profileType={profileType}
              />
            ))}
          </div>
        </>
      )
        :
        (
          <>
            <h1 className='head_text text-left'>
              <span className='blue-gradient'>{name} Profile</span>
            </h1>
            <p className="desc text-left">
              {desc}
            </p>
            <div className="mt-10 prompt_layout">
              {data.map((post) => (
                <PromptCard
                  key={post._id}
                  post={post}
                  profileType={profileType}
                />
              ))}
            </div>
          </>
        )
      }
    </section>
  )
}

export default Profile
