// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import works from './works';
import testimonials from './testimonials';
import brands from './brands';
import services from './services';
import blogs from './blogs';
import experiences from './experiences';
import skills from './skills';
import workExperience from './workExperience';
import contact from './contact';
import portfolio from './portfolio';
import gridImage from './gridImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		blogs,
		portfolio,
		works,
		testimonials,
		brands,
		services,
		skills,
		workExperience,
		gridImage,
		experiences,
		contact,
		/* Your types here! */
	]),
});
